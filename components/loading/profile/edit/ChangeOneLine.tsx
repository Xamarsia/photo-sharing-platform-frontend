import 'server-only';



import formStyles from '@/app/styles/components/form.module.css';
import Input from '../../common/Input';
import Button from '../../common/Button';


export default function ChangeOneLine() {
    return (
        <form className={`text-left ${formStyles['form-container']}`}>
            <Input />
            <Button />
        </form>
    );
}
