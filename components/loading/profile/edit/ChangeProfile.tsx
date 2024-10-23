import 'server-only';



import formStyles from '@/app/styles/components/form.module.css';

import Button from '../../common/Button';
import styles from '@/app/styles/components/profile.image.module.css';

export default function ChangeProfile() {
    return (
        <form className={`text-left ${formStyles['form-container']}`}>
            {/* ProfileImage */}
            <div className={`${styles['regular-size']} inline-flex rounded-full bg-gray-200`} />
            <Button />
        </form>
    );
}
