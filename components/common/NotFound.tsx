import blueExclamationCircle from '@/public/exclamation-circle/blue-exclamation-circle.svg';

import Image from 'next/image';

import Text from '@/components/common/Text';


type Props = {
    alertTitle: string,
    alertBody?: string,
}


export default function NotFound({ alertTitle, alertBody }: Props) {
    return (
        <div className="flex flex-col items-center mx-auto px-6 py-12 gap-2">
            <div className="rounded-full bg-blue-50 p-3">
                <Image src={blueExclamationCircle} alt="icon" />
            </div>
            <h1 className={`text-slate-800 font-normal tracking-normal text-xl sm:text-2xl leading-9 text-center`}>{alertTitle}</h1>
            <Text style='secondary-info' size='base' text={alertBody} />
        </div>
    );
};
