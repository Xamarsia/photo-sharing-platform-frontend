import 'server-only';

import formStyles from '@/app/styles/components/form.module.css';
// import ChangeUserInfo from './ChangeUserInfo';
import ChangeProfile from './ChangeProfile';


export default function SettingPage() {

    return (
        <div className={`text-left ${formStyles['form-container']}`}>
            <div className="flex justify-between mt-2 mb-4">
                <div className="h-5 bg-gray-200 rounded-full w-64" />
            </div>

            {/* <p>Here</p> */}
            {/* <ChangeUserInfo /> */}
            <ChangeProfile />
        </div>
    )
}
