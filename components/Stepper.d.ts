import { ReactNode } from 'react';

interface StepperProps {
    children: ReactNode;
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    stepCircleContainerClassName?: string;
    stepContainerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    backButtonProps?: any;
    nextButtonProps?: any;
    backButtonText?: string;
    nextButtonText?: string;
    disableStepIndicators?: boolean;
    renderStepIndicator?: (props: { step: number; currentStep: number; onStepClick: (step: number) => void }) => ReactNode;
    [key: string]: any;
}

export default function Stepper(props: StepperProps): JSX.Element;
export function Step({ children }: { children: ReactNode }): JSX.Element;