import { useEffect, useRef, useState, useCallback } from "react";

const TARGET_MIN = 0.35;
const TARGET_MAX = 0.65;
const SPEED = 1;
const PELLICLE_ANIM_MS = 900;

const sliderToAngle = (t01) => 45 - 90 * t01; 
const angleToSlider = (deg) => (45 - deg) / 90; 

const ARROW_EXIT_MS = 800; 

export const useDepositionGame = () => {
  const [phase, setPhase] = useState("measure");
  const [isRunning, setIsRunning] = useState(false);
  const [pos, setPos] = useState(0);
  const [dir, setDir] = useState(1);
  const [failed, setFailed] = useState(false);

  const [success, setSuccess] = useState(false);
  const [pellicleExiting, setPellicleExiting] = useState(false);
  const [pellicleGone, setPellicleGone] = useState(false);

  const [arrowsEnter, setArrowsEnter] = useState(false);
  const [arrowsExit, setArrowsExit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pellicleRef = useRef(null);
  const [slotW, setSlotW] = useState(null);
  const [slotH, setSlotH] = useState(null);

  const rafRef = useRef(null);
  const lastTsRef = useRef(null);

  useEffect(() => {
    if (!pellicleRef.current || pellicleGone) return;
    const el = pellicleRef.current;
    const updateSize = () => {
      setSlotW(el.clientWidth);
      setSlotH(el.clientHeight);
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [pellicleGone]);

  useEffect(() => {
    if (phase !== "measure" || !isRunning) return;
    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      setPos((prev) => {
        let next = prev + dir * SPEED * dt;
        if (next >= 1) {
          next = 1 - (next - 1);
          setDir(-1);
        } else if (next <= 0) {
          next = -next;
          setDir(1);
        }
        return Math.max(0, Math.min(1, next));
      });

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [phase, isRunning, dir]);

  const handleStart = useCallback(() => {
    setFailed(false);
    setIsRunning(true);
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
    lastTsRef.current = null;

    if (pos >= TARGET_MIN && pos <= TARGET_MAX) {
      setPellicleExiting(true);
      setTimeout(() => {
        setPellicleGone(true);
        setSuccess(true);
        setArrowsEnter(true);
        setPhase("angle");
      }, PELLICLE_ANIM_MS);
    } else {
      setFailed(true);
      setTimeout(() => {
        setFailed(false);
        setPos(0);
        setDir(1);
      }, 600);
    }
  }, [pos]);

  const [angle, setAngle] = useState(15);
  const handleAngleChange = useCallback((e) => {
    const t = Number(e.target.value) / 100;
    setAngle(sliderToAngle(t));
  }, []);
  const sliderValue = Math.round(angleToSlider(angle) * 100);

  const fire = useCallback(() => {
    setArrowsExit(true);
    setTimeout(() => {
      setShowModal(true);
    }, ARROW_EXIT_MS);
  }, []);

  const handleModalClose = useCallback(() => setShowModal(false), []);

  return {
    phase,
    isRunning,
    pos,
    failed,
    success,
    pellicleExiting,
    pellicleGone,
    arrowsEnter,
    arrowsExit,
    showModal,
    pellicleRef,
    slotW,
    slotH,
    angle,
    sliderValue,
    handleStart,
    handleStop,
    handleAngleChange,
    fire,
    handleModalClose,
  };
};
