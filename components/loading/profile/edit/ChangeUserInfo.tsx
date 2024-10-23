import 'server-only';



import formStyles from '@/app/styles/components/form.module.css';
import Input from '../../common/Input';
import Textarea from '../../common/Textarea';
import Button from '../../common/Button';


export default function ChangeUserInfo() {
    return (
        <form className={`text-left ${formStyles['form-container']}`}>
            <Input />
            <Textarea />
            <Button />
        </form>
    );
}
