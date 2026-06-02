// Eucalyptus branch decorations — watercolour-style SVG

export function BranchTopRight({ className = '' }) {
  return (
    <svg viewBox="0 0 220 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.85">
        {/* Main stem */}
        <path d="M210 5 C190 35 165 65 135 95 C105 125 75 150 45 180" stroke="#7A9B6A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        {/* Branch 1 */}
        <path d="M185 30 C175 20 160 15 148 18" stroke="#7A9B6A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Branch 2 */}
        <path d="M162 55 C148 40 132 38 122 44" stroke="#7A9B6A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Branch 3 */}
        <path d="M138 80 C120 68 105 68 95 76" stroke="#7A9B6A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Branch 4 */}
        <path d="M110 108 C95 95 80 95 70 103" stroke="#7A9B6A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

        {/* Leaves - pairs of ellipses on each branch */}
        <ellipse cx="172" cy="16" rx="13" ry="7" fill="#8FAF7C" opacity="0.8" transform="rotate(-50 172 16)"/>
        <ellipse cx="158" cy="12" rx="12" ry="6" fill="#A3BF91" opacity="0.7" transform="rotate(-40 158 12)"/>

        <ellipse cx="148" cy="35" rx="14" ry="7" fill="#8FAF7C" opacity="0.8" transform="rotate(-60 148 35)"/>
        <ellipse cx="134" cy="32" rx="12" ry="6" fill="#A3BF91" opacity="0.7" transform="rotate(-50 134 32)"/>

        <ellipse cx="118" cy="60" rx="13" ry="7" fill="#8FAF7C" opacity="0.8" transform="rotate(-65 118 60)"/>
        <ellipse cx="106" cy="57" rx="12" ry="6" fill="#B5CB9E" opacity="0.7" transform="rotate(-55 106 57)"/>

        <ellipse cx="88" cy="87" rx="13" ry="7" fill="#8FAF7C" opacity="0.8" transform="rotate(-65 88 87)"/>
        <ellipse cx="76" cy="84" rx="11" ry="6" fill="#A3BF91" opacity="0.7" transform="rotate(-55 76 84)"/>

        {/* Round eucalyptus leaves on main stem */}
        <ellipse cx="195" cy="18" rx="9" ry="9" fill="#B5CB9E" opacity="0.5"/>
        <ellipse cx="170" cy="45" rx="10" ry="10" fill="#A3BF91" opacity="0.5"/>
        <ellipse cx="145" cy="72" rx="9" ry="9" fill="#8FAF7C" opacity="0.5"/>
        <ellipse cx="118" cy="100" rx="9" ry="9" fill="#A3BF91" opacity="0.5"/>
        <ellipse cx="88" cy="128" rx="8" ry="8" fill="#B5CB9E" opacity="0.4"/>
        <ellipse cx="62" cy="158" rx="8" ry="8" fill="#A3BF91" opacity="0.4"/>
      </g>
    </svg>
  )
}

export function BranchBottomLeft({ className = '' }) {
  return (
    <svg viewBox="0 0 220 200" className={`${className} scale-x-[-1] scale-y-[-1]`} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.85">
        <path d="M210 5 C190 35 165 65 135 95 C105 125 75 150 45 180" stroke="#7A9B6A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M185 30 C175 20 160 15 148 18" stroke="#7A9B6A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M162 55 C148 40 132 38 122 44" stroke="#7A9B6A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M138 80 C120 68 105 68 95 76" stroke="#7A9B6A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <ellipse cx="172" cy="16" rx="13" ry="7" fill="#8FAF7C" opacity="0.8" transform="rotate(-50 172 16)"/>
        <ellipse cx="158" cy="12" rx="12" ry="6" fill="#A3BF91" opacity="0.7" transform="rotate(-40 158 12)"/>
        <ellipse cx="148" cy="35" rx="14" ry="7" fill="#8FAF7C" opacity="0.8" transform="rotate(-60 148 35)"/>
        <ellipse cx="134" cy="32" rx="12" ry="6" fill="#A3BF91" opacity="0.7" transform="rotate(-50 134 32)"/>
        <ellipse cx="118" cy="60" rx="13" ry="7" fill="#8FAF7C" opacity="0.8" transform="rotate(-65 118 60)"/>
        <ellipse cx="106" cy="57" rx="12" ry="6" fill="#B5CB9E" opacity="0.7" transform="rotate(-55 106 57)"/>
        <ellipse cx="195" cy="18" rx="9" ry="9" fill="#B5CB9E" opacity="0.5"/>
        <ellipse cx="170" cy="45" rx="10" ry="10" fill="#A3BF91" opacity="0.5"/>
        <ellipse cx="145" cy="72" rx="9" ry="9" fill="#8FAF7C" opacity="0.5"/>
        <ellipse cx="118" cy="100" rx="9" ry="9" fill="#A3BF91" opacity="0.5"/>
      </g>
    </svg>
  )
}

export function SmallBranch({ className = '' }) {
  return (
    <svg viewBox="0 0 120 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.7">
        <path d="M110 5 C90 25 65 50 35 80" stroke="#7A9B6A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M88 22 C78 12 65 10 56 14" stroke="#7A9B6A" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M65 45 C52 35 40 35 33 41" stroke="#7A9B6A" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <ellipse cx="78" cy="13" rx="10" ry="5" fill="#8FAF7C" opacity="0.8" transform="rotate(-50 78 13)"/>
        <ellipse cx="66" cy="10" rx="9" ry="5" fill="#A3BF91" opacity="0.7" transform="rotate(-40 66 10)"/>
        <ellipse cx="45" cy="33" rx="10" ry="5" fill="#8FAF7C" opacity="0.8" transform="rotate(-60 45 33)"/>
        <ellipse cx="35" cy="31" rx="9" ry="5" fill="#B5CB9E" opacity="0.6" transform="rotate(-50 35 31)"/>
        <ellipse cx="100" cy="13" rx="7" ry="7" fill="#B5CB9E" opacity="0.45"/>
        <ellipse cx="78" cy="35" rx="7" ry="7" fill="#A3BF91" opacity="0.45"/>
        <ellipse cx="53" cy="60" rx="6" ry="6" fill="#8FAF7C" opacity="0.4"/>
      </g>
    </svg>
  )
}
