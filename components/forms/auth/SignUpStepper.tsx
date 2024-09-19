"use client";


import Stepper from "@/components/common/Stepper";
import SignUpForm from "@/components/forms/auth/SignUpForm";
import AuthenticationForm from "@/components/forms/auth/AuthenticationForm";


import { useState } from "react";


type Props = {
    local: any;
}


export default function SignUpStepper({ local }: Props) {

    const [activeStep, setActiveStep] = useState(0);

    const handleAuthenticate = () => {
        setActiveStep(activeStep + 1)
    };

    const formElements = [
        <AuthenticationForm local={local} onSubmit={handleAuthenticate} />,
        //TODO State when authenticated but not signed up (Email not unique)
        <SignUpForm local={local} />,
    ]


    return (
        <Stepper steps={formElements} currentIndex={activeStep} />
    );
}
