import { ReactNode, ReactElement } from 'react';

interface RenderStepIndicatorProps {
    step: number;
    currentStep: number;
    onStepClick: (step: number) => void;
}

interface StepperProps {
    children: ReactNode;
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    stepCircleContainerClassName?: string;
    stepContainerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    backButtonProps?: Record<string, any>;
    nextButtonProps?: Record<string, any>;
    backButtonText?: string;
    nextButtonText?: string;
    disableStepIndicators?: boolean;
    renderStepIndicator?: (props: RenderStepIndicatorProps) => ReactElement;
}

declare function Stepper(props: StepperProps): ReactElement;
declare function Step(props: { children: ReactNode }): ReactElement;

export default Stepper;
export { Step };