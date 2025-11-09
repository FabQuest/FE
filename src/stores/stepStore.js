import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStepStore = create(
  persist(
    (set) => ({
      step1: {
        currentStep: 0,
        openComplete: false,
      },
      setStep1CurrentStep: (currentStep) => set((state) => ({ step1: { ...state.step1, currentStep } })),
      setStep1OpenComplete: (openComplete) => set((state) => ({ step1: { ...state.step1, openComplete } })),

      step3: {
        currentSubStep: 1,
      },
      setStep3CurrentSubStep: (currentSubStep) => set((state) => ({ step3: { ...state.step3, currentSubStep } })),

      step5: {
        currentSubStep: 1,
      },
      setStep5CurrentSubStep: (currentSubStep) => set((state) => ({ step5: { ...state.step5, currentSubStep } })),

      step8: {
        currentSubStep: 1,
      },
      setStep8CurrentSubStep: (currentSubStep) => set((state) => ({ step8: { ...state.step8, currentSubStep } })),

      resetAllSteps: () =>
        set({
          step1: { currentStep: 0, openComplete: false },
          step3: { currentSubStep: 1 },
          step5: { currentSubStep: 1 },
          step8: { currentSubStep: 1 },
        }),
    }),
    {
      name: 'step-progress-storage', 
      storage: localStorage, 
    },
  ),
);

export default useStepStore;
