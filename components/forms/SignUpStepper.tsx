"use client";


import Stepper from "@/components/common/Stepper";
import SignUpForm from "@/components/forms/SignUpForm";
import AuthenticationForm from "@/components/forms/AuthenticationForm";


import { useState } from "react";


type Props = {
    local: any;
}


export default function SignUpStepper({ local }: Props) {

    const [activeStep, setActiveStep] = useState(0);

    const handleAuthenticate = () => {
        setActiveStep(activeStep + 1)
    };

    const handleRegistration = () => {

    };


    const formElements = [
        <AuthenticationForm local={local} onSubmit={handleAuthenticate} />,
        <SignUpForm local={local} onSubmit={handleRegistration} />,
    ]


    return (
        <Stepper steps={formElements} currentIndex={activeStep} />
    );
}
