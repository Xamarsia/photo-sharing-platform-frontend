"use client";


import Stepper from "@/components/common/Stepper";
import SignUpForm from "@/components/forms/auth/SignUpForm";


import { useState } from "react";
import SignInForm from "./SignInForm";


type Props = {
    local: any;
}


export default function SignInStepper({ local }: Props) {

    const [activeStep, setActiveStep] = useState(0);

    const handleAuthenticate = () => {
        setActiveStep(activeStep + 1)
    };

    const formElements = [
        <SignInForm local={local} registerUser={handleAuthenticate} />,
        <SignUpForm local={local} />,
    ]


    return (
        <Stepper steps={formElements} currentIndex={activeStep} />
    );
}
