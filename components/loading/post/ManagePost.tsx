import 'server-only';

import formStyles from '@/app/styles/components/form.module.css';

import Card from '@/components/common/Card';
import Button from '@/components/loading/common/Button';
import Textarea from '@/components/loading/common/Textarea';


export default function ManagePost() {
    return (
        <div className='flex flex-grow justify-center items-center m-4'>
            <Card>
                <form className={`${formStyles['form-container']}`}>
                    <div className="h-5 bg-gray-200 rounded-full w-48 my-4" />
                    <div className={`relative w-full aspect-square bg-gray-200 rounded-lg mb-4`} />
                    <Textarea />
                    <Button />
                </form>
            </Card>
        </div>
    )
}
