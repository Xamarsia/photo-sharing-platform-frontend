import 'server-only';

import FooterMenu from '@/components/common/footer/FooterMenu';

import styles from '@/styles/text/text.module.css';

type Props = {
    local: any,
}


export default function Footer({ local }: Props) {
    return (
        <footer className="bg-white w-full z-5 border-t border-gray-100 flex-shrink-0 h-24 md:h-16">
            <div className="flex flex-col items-center justify-center gap-2 h-full md:justify-between md:flex-row md:px-8">
                <span className={`${styles['secondary-info']}`}>
                    {local.copyrightText}
                </span>
                <FooterMenu local={local} />
            </div>
        </footer>
    )
}
