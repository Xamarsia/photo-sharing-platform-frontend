"use client";


import Stepper from "@/components/common/Stepper";
import SignUpForm from "@/components/forms/auth/SignUpForm";


import { useState } from "react";
import SignInForm from "./SignInForm";


type Props = {
    local: any,
    isAuth: string | undefined
}


export default function SignInStepper({ local, isAuth }: Props) {
    const [activeStep, setActiveStep] = useState(isAuth ? 1 : 0);

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
