"use client";


import Stepper from "@/components/common/Stepper";
import SignUpForm from "@/components/forms/auth/SignUpForm";
import AuthenticationForm from "@/components/forms/auth/AuthenticationForm";


import { useState } from "react";


type Props = {
    local: any,
    isAuth: string | undefined
}


export default function SignUpStepper({ local, isAuth }: Props) {
    const [activeStep, setActiveStep] = useState(isAuth ? 1 : 0);

    const handleAuthenticate = () => {
        setActiveStep(activeStep + 1)
    };

    const formElements = [
        <AuthenticationForm local={local} onSubmit={handleAuthenticate} />,
        <SignUpForm local={local} />,
    ]


    return (
        <Stepper steps={formElements} currentIndex={activeStep} />
    );
}
