export default function ProgressBar({ widthAmount, bgColor, emptyColor }) {
    return (
        <div className="progress-bar w-full h-2 bg-gray-300 rounded-md" style={{backgroundColor: `${emptyColor}`}}>
            <div 
                className="h-full rounded-md transition-all duration-300"
                style={{ width: `${widthAmount}%`, backgroundColor: `${bgColor}` }}
            >
            </div>
        </div>
    );
}
