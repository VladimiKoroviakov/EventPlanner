import { useState, useEffect, useRef } from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 890);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 890);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleFilters = () => {
        setIsExpanded(!isExpanded);
    };

    const handleFieldClick = () => {
        if (isMobile) {
            if (isExpanded) {
                setIsExpanded(false);
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 0);
            } else {
                inputRef.current?.focus();
            }
        }
    };

    return (
        <div className="search-bar">
            <div className={`search ${isMobile && isExpanded ? 'collapsed' : ''}`}>
                <div className="field" onClick={handleFieldClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                        <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/>
                    </svg>
                    {(!isMobile || !isExpanded) && (
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search events..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}
                </div>
            </div>
            <div className="filters">
                <ul className={`filter-list ${isExpanded ? 'expanded' : ''}`}>
                    <li className="active">All</li>
                    <li>Upcoming</li>
                    <li>Past</li>
                    <li>Planned</li>
                    <li>Completed</li>
                    <li>Cancelled</li>
                </ul>
                <button 
                    className={`filter-button ${isExpanded ? 'expanded' : ''}`} 
                    onClick={toggleFilters}
                >
                    {isExpanded ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                            <path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                            <path d="M200-160v-280h-80v-80h240v80h-80v280h-80Zm0-440v-200h80v200h-80Zm160 0v-80h80v-120h80v120h80v80H360Zm80 440v-360h80v360h-80Zm240 0v-120h-80v-80h240v80h-80v120h-80Zm0-280v-360h80v360h-80Z"/>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}