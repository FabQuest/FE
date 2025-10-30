import { useState, useEffect, useMemo } from "react";
import { genRandomDies, isDefectDie } from "../utils/dieUtils";
import { useNavigate } from "react-router-dom";

export const useDieGame = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("wafer");
  const [dies, setDies] = useState([]);
  const [allDies, setAllDies] = useState([]);
  const [selectedDie, setSelectedDie] = useState(null);
  const [checkModalOpen, setCheckModalOpen] = useState(false);
  const [checkModalType, setCheckModalType] = useState("correct");
  const [showSummary, setShowSummary] = useState(false);
  const [nextModalOpen, setNextModalOpen] = useState(false);

  useEffect(() => {
    const init = genRandomDies(4);
    setDies(init);
    setAllDies(init);
  }, []);

  const onClickDie = (d) => {
    setSelectedDie(d);
    setView("inspect");
  };

  const onChoose = (userSaysDefect) => {
    if (!selectedDie) return;
    const truth = isDefectDie(selectedDie);
    setCheckModalType(userSaysDefect === truth ? "correct" : "wrong");
    setCheckModalOpen(true);
  };

  const handleCheckModalConfirm = () => {
    setCheckModalOpen(false);

    if (checkModalType === "correct") {
      setDies((prev) => prev.filter((d) => d.id !== selectedDie.id));
      setSelectedDie(null);
      setView("wafer");
    }
  };

  useEffect(() => {
    if (view === "wafer" && allDies.length > 0 && dies.length === 0 && !showSummary) {
      setShowSummary(true);
    }
  }, [view, dies.length, allDies.length, showSummary]);

  useEffect(() => {
    if (!showSummary) return;
    const t = setTimeout(() => setNextModalOpen(true), 1200);
    return () => clearTimeout(t);
  }, [showSummary]);

  const yieldData = useMemo(() => {
    const total = allDies.length;
    const defectCount = allDies.filter(isDefectDie).length;
    const normalCount = total - defectCount;
    const yieldPct = total ? Math.round((normalCount / total) * 100) : 0;
    return { total, normalCount, defectCount, yieldPct };
  }, [allDies]);

  const goNextStep = () => {
    setNextModalOpen(false);
    navigate("/detail/step8");
  };

  return {
    view,
    dies,
    selectedDie,
    checkModalOpen,
    checkModalType,
    showSummary,
    nextModalOpen,
    yieldData,
    onClickDie,
    onChoose,
    handleCheckModalConfirm,
    goNextStep,
  };
};