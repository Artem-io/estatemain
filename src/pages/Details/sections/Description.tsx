import ReactMarkdown from 'react-markdown';
import type {DescriptionProps} from '../interfaces/interfaces';

export default function Description({setIsOpen, fullDescription}: DescriptionProps) {
    return (
        <div className='px-2 bigphone:px-0'>
            <div className="whitespace-pre-line mb-8">
                <ReactMarkdown>{`${fullDescription}`}</ReactMarkdown>
            </div>
            <button
            onClick={() => setIsOpen(true)}
            className="w-[300px] big:w-[350px] mx-auto
            mb-4 py-3 rounded-xl big:rounded-2xl cursor-pointer
            active-btn hover:brightness-80
            flex items-center justify-center font-bold
            small:text-lg big:text-lg">
                Узнать подробности
            </button>
        </div>
    );
}