"use client";


import React, { ReactNode, createContext, useEffect, useState } from 'react';
import Alert from '@/components/common/alert/Alert';


type AlertType = 'Success' | 'Error' | 'Warning';

type Alert = {
    type: AlertType;
    message: string;
};

type AlertContext = {
    showAlert: (type: AlertType, message: string) => void;
};

// Create a new context for the Alert
export const AlertContext = createContext<AlertContext>({
    showAlert: () => { },
});


type Props = {
    children: ReactNode,
};


export default function AlertProvider({ children }: Props) {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    // Function to hide an alert based on its index
    const hideAlert = (index: number) => {
        setAlerts((alert) => alert.filter((value, i) => i !== index));
    };

    // UseEffect hook to remove the first alert message after 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setAlerts((alerts) => {
                if (alerts.length > 0) {
                    return alerts.slice(1); // Return array without first alert
                }
                clearInterval(interval);
                return alerts;
            });
        }, 8 * 1000); // 8 seconds
        return () => clearInterval(interval);
    }, []);

    //

    //TODO set maximum number of alerts that can be displayed at the same time
    // Context value containing the showAlert function
    const contextValue: AlertContext = {
        showAlert: (type, message) => {
            const alertMessage: Alert = {
                type,
                message,
            };
            setAlerts((prev) => [...prev, alertMessage]);
        },
    };

    return (
        <AlertContext.Provider value={contextValue}>
            <div className='flex flex-col flex-grow relative flex-shrink-0 justify-end'>
                <div className='absolute w-full z-[51]'>
                    {alerts.map((alert, index) => (
                        <Alert
                            message={alert.message}
                            type={alert.type}
                            key={index}
                            onClose={() => hideAlert(index)}
                        />
                    ))}
                </div>
                {children}
            </div>
        </AlertContext.Provider>
    );
};
