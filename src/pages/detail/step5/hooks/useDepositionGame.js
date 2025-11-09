import { useEffect, useRef, useState, useCallback } from "react";
import useStepStore from "@stores/stepStore";

const TARGET_MIN = 0.35;
const TARGET_MAX = 0.65;
const SPEED = 1;
const PELLICLE_ANIM_MS = 900;
const ARROW_EXIT_MS = 800;

const sliderToAngle = (t01) => 45 - 90 * t01;
const angleToSlider = (deg) => (45 - deg) / 90;

export const useDepositionGame = () => {
  const currentSubStep = useStepStore((state) => state.step5.currentSubStep);
  const setStep5CurrentSubStep = useStepStore(
    (state) => state.setStep5CurrentSubStep,
  );

  const phase = currentSubStep === 1 ? "measure" : "angle";

  const [isRunning, setIsRunning] = useState(false);

  const posRef = useRef(0);
  const dirRef = useRef(1);

  const [pos, setPos] = useState(0);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);

  const [pellicleExiting, setPellicleExiting] = useState(false);
  const [pellicleGone, setPellicleGone] = useState(false);

  const [arrowsEnter, setArrowsEnter] = useState(false);
  const [arrowsExit, setArrowsExit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pellicleRef = useRef(null);
  const knobRef = useRef(null);
  const [slotW, setSlotW] = useState(null);
  const [slotH, setSlotH] = useState(null);

  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const lastUiTsRef = useRef(0);

  useEffect(() => {
    if (phase === "angle") {
      setPellicleGone(true);
      setArrowsEnter(true);
      setSuccess(true);
    }
  }, [phase]);

  useEffect(() => {
    if (!pellicleRef.current || pellicleGone) return;
    const el = pellicleRef.current;
    let raf = 0;

    const updateSize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setSlotW(el.clientWidth);
        setSlotH(el.clientHeight);
      });
    };

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [pellicleGone]);

  useEffect(() => {
    if (phase !== "measure" || !isRunning) return;

    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      let p = posRef.current + dirRef.current * SPEED * dt;
      if (p >= 1) {
        p = 1 - (p - 1);
        dirRef.current = -1;
      } else if (p <= 0) {
        p = -p;
        dirRef.current = 1;
      }
      posRef.current = Math.max(0, Math.min(1, p));

      if (knobRef.current) {
        knobRef.current.style.left = `${posRef.current * 100}%`;
      }

      if (ts - lastUiTsRef.current > 100) {
        lastUiTsRef.current = ts;
        setPos(posRef.current);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [phase, isRunning]);

  const handleStart = useCallback(() => {
    setFailed(false);
    requestAnimationFrame(() => {
      lastTsRef.current = null;
      lastUiTsRef.current = 0;
      setIsRunning(true);
    });
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
    lastTsRef.current = null;

    const p = posRef.current;
    if (p >= TARGET_MIN && p <= TARGET_MAX) {
      setPellicleExiting(true);
      setTimeout(() => {
        setPellicleGone(true);
        setSuccess(true);
        setArrowsEnter(true);
        setStep5CurrentSubStep(2);
      }, PELLICLE_ANIM_MS);
    } else {
      setFailed(true);
      setTimeout(() => {
        setFailed(false);
        posRef.current = 0;
        dirRef.current = 1;
        if (knobRef.current) {
          knobRef.current.style.left = `0%`;
        }
        setPos(0);
      }, 600);
    }
  }, [setStep5CurrentSubStep]);

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

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    setStep5CurrentSubStep(1);
  }, [setStep5CurrentSubStep]);

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
    knobRef,
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
