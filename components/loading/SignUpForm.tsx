import 'server-only'


import formStyles from '@/app/styles/components/form.module.css';

import Input from '@/components/loading/common/Input';
import Button from '@/components/loading/common/Button';
import Title from '@/components/loading/common/Title';
import Link from '@/components/loading/common/Link';


export default function SignUpForm() {
    return (
        <form className={`${formStyles['form-card-container']}`}>
            <div className={`${formStyles['form-container']}`}>
                <div className='mb-4'>
                    <Title />
                </div>
                <Button fill='parent' />
                <hr className="h-px bg-gray-100 border-0" />
                <Input />
                <Input />
                <Input />
            </div>
            <div>
                <Button />
                <div className='w-32'>
                    <Link />
                </div>
            </div>
        </form>
    )
}
