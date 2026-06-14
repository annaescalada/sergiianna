// Watercolour botanical branches — wedding invitation style, Costa Brava palette

export function BranchTopRight({ className = '' }) {
  return (
    <svg viewBox="0 0 300 280" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.88">
        {/* Main sweeping stem from top-right corner */}
        <path d="M295 0 C270 20 240 50 210 85 C185 115 160 145 130 175" stroke="#5A7A42" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        {/* Secondary stem branching left */}
        <path d="M240 55 C215 65 190 60 168 70" stroke="#5A7A42" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
        {/* Tertiary stem going down-left */}
        <path d="M185 110 C162 118 145 115 125 122" stroke="#5A7A42" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* Small side sprigs */}
        <path d="M260 30 C250 20 238 16 228 18" stroke="#6B8C52" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
        <path d="M220 75 C208 68 198 68 190 73" stroke="#6B8C52" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
        <path d="M165 130 C153 124 143 125 136 130" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M150 162 C138 157 128 158 120 163" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>

        {/* Leaves on main stem — varied sizes, watercolour feel */}
        {/* Top cluster */}
        <path d="M278 8 C272 2 260 4 258 12 C256 20 268 24 275 18 C280 13 278 8 278 8Z" fill="#7AAB5A" opacity="0.75"/>
        <path d="M285 15 C282 8 270 8 267 16 C264 24 275 28 280 22 C284 18 285 15 285 15Z" fill="#5A7A42" opacity="0.65"/>
        <path d="M265 5 C258 0 247 3 246 11 C245 18 255 20 261 15 C266 11 265 5 265 5Z" fill="#9ABF78" opacity="0.6"/>

        {/* Mid-top leaves */}
        <path d="M248 38 C240 30 226 32 224 42 C222 52 235 56 243 48 C250 42 248 38 248 38Z" fill="#6B8C52" opacity="0.8"/>
        <path d="M255 45 C250 36 237 36 234 46 C231 56 244 60 251 52 C257 45 255 45 255 45Z" fill="#5A7A42" opacity="0.55"/>
        <path d="M235 28 C226 22 213 26 212 36 C211 44 222 47 230 40 C237 33 235 28 235 28Z" fill="#9ABF78" opacity="0.65"/>
        {/* Loose floating leaf */}
        <path d="M218 22 C212 16 202 19 201 27 C200 34 210 36 215 30 C219 25 218 22 218 22Z" fill="#7AAB5A" opacity="0.5" transform="rotate(-15 210 27)"/>

        {/* Branch 2 leaves */}
        <path d="M222 62 C214 55 201 58 200 67 C199 76 211 79 219 72 C226 65 222 62 222 62Z" fill="#6B8C52" opacity="0.78"/>
        <path d="M210 55 C202 48 190 52 189 61 C188 70 200 73 207 66 C213 59 210 55 210 55Z" fill="#5A7A42" opacity="0.6"/>
        <path d="M196 67 C189 61 177 65 177 74 C177 82 188 83 194 77 C199 71 196 67 196 67Z" fill="#9ABF78" opacity="0.62"/>
        <path d="M180 58 C172 52 161 56 161 65 C161 73 172 74 177 68 C181 63 180 58 180 58Z" fill="#7AAB5A" opacity="0.5" transform="rotate(10 170 65)"/>

        {/* Main stem mid leaves */}
        <path d="M200 92 C192 84 178 87 177 97 C176 107 188 110 196 103 C203 96 200 92 200 92Z" fill="#5A7A42" opacity="0.8"/>
        <path d="M210 98 C205 89 192 90 190 100 C188 110 200 113 207 106 C213 99 210 98 210 98Z" fill="#7AAB5A" opacity="0.6"/>
        <path d="M188 85 C180 77 167 80 167 90 C167 100 178 102 185 95 C191 89 188 85 188 85Z" fill="#9ABF78" opacity="0.58"/>

        {/* Branch 3 leaves */}
        <path d="M170 120 C162 113 149 116 148 126 C147 136 159 138 166 131 C173 124 170 120 170 120Z" fill="#6B8C52" opacity="0.75"/>
        <path d="M158 115 C150 108 137 112 137 122 C137 131 148 133 155 126 C161 119 158 115 158 115Z" fill="#5A7A42" opacity="0.62"/>
        <path d="M144 120 C136 114 124 118 124 128 C124 137 135 138 141 132 C146 126 144 120 144 120Z" fill="#9ABF78" opacity="0.55"/>

        {/* Lower stem leaves */}
        <path d="M160 150 C152 142 138 145 137 156 C136 166 148 168 156 161 C163 154 160 150 160 150Z" fill="#7AAB5A" opacity="0.72"/>
        <path d="M148 158 C140 151 127 155 127 165 C127 175 139 176 145 169 C151 162 148 158 148 158Z" fill="#5A7A42" opacity="0.58"/>
        <path d="M168 158 C163 149 150 150 148 160 C146 170 158 173 165 166 C171 159 168 158 168 158Z" fill="#6B8C52" opacity="0.52"/>

        {/* Scattered loose leaves */}
        <path d="M175 175 C169 168 158 171 157 180 C156 189 167 190 172 184 C177 178 175 175 175 175Z" fill="#9ABF78" opacity="0.48" transform="rotate(20 165 182)"/>
        <path d="M140 185 C134 179 123 182 122 191 C121 199 132 200 137 194 C141 188 140 185 140 185Z" fill="#7AAB5A" opacity="0.4" transform="rotate(-10 130 191)"/>
        <path d="M200 140 C195 132 183 135 182 144 C181 153 192 155 198 148 C203 142 200 140 200 140Z" fill="#5A7A42" opacity="0.38" transform="rotate(25 190 145)"/>

        {/* Tiny accent leaves floating */}
        <path d="M230 110 C226 105 219 107 219 113 C219 119 226 120 229 116 C232 112 230 110 230 110Z" fill="#9ABF78" opacity="0.45" transform="rotate(-20 224 113)"/>
        <path d="M120 145 C116 140 109 142 109 148 C109 154 116 155 119 151 C122 147 120 145 120 145Z" fill="#7AAB5A" opacity="0.4" transform="rotate(15 114 148)"/>
      </g>
    </svg>
  )
}

export function BranchBottomLeft({ className = '' }) {
  return (
    <svg viewBox="0 0 300 280" className={`${className} scale-x-[-1] scale-y-[-1]`} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.88">
        <path d="M295 0 C270 20 240 50 210 85 C185 115 160 145 130 175" stroke="#5A7A42" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <path d="M240 55 C215 65 190 60 168 70" stroke="#5A7A42" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
        <path d="M185 110 C162 118 145 115 125 122" stroke="#5A7A42" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M260 30 C250 20 238 16 228 18" stroke="#6B8C52" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
        <path d="M220 75 C208 68 198 68 190 73" stroke="#6B8C52" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
        <path d="M165 130 C153 124 143 125 136 130" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>

        <path d="M278 8 C272 2 260 4 258 12 C256 20 268 24 275 18 C280 13 278 8 278 8Z" fill="#7AAB5A" opacity="0.75"/>
        <path d="M285 15 C282 8 270 8 267 16 C264 24 275 28 280 22 C284 18 285 15 285 15Z" fill="#5A7A42" opacity="0.65"/>
        <path d="M265 5 C258 0 247 3 246 11 C245 18 255 20 261 15 C266 11 265 5 265 5Z" fill="#9ABF78" opacity="0.6"/>

        <path d="M248 38 C240 30 226 32 224 42 C222 52 235 56 243 48 C250 42 248 38 248 38Z" fill="#6B8C52" opacity="0.8"/>
        <path d="M255 45 C250 36 237 36 234 46 C231 56 244 60 251 52 C257 45 255 45 255 45Z" fill="#5A7A42" opacity="0.55"/>
        <path d="M235 28 C226 22 213 26 212 36 C211 44 222 47 230 40 C237 33 235 28 235 28Z" fill="#9ABF78" opacity="0.65"/>
        <path d="M218 22 C212 16 202 19 201 27 C200 34 210 36 215 30 C219 25 218 22 218 22Z" fill="#7AAB5A" opacity="0.5" transform="rotate(-15 210 27)"/>

        <path d="M222 62 C214 55 201 58 200 67 C199 76 211 79 219 72 C226 65 222 62 222 62Z" fill="#6B8C52" opacity="0.78"/>
        <path d="M210 55 C202 48 190 52 189 61 C188 70 200 73 207 66 C213 59 210 55 210 55Z" fill="#5A7A42" opacity="0.6"/>
        <path d="M196 67 C189 61 177 65 177 74 C177 82 188 83 194 77 C199 71 196 67 196 67Z" fill="#9ABF78" opacity="0.62"/>

        <path d="M200 92 C192 84 178 87 177 97 C176 107 188 110 196 103 C203 96 200 92 200 92Z" fill="#5A7A42" opacity="0.8"/>
        <path d="M210 98 C205 89 192 90 190 100 C188 110 200 113 207 106 C213 99 210 98 210 98Z" fill="#7AAB5A" opacity="0.6"/>
        <path d="M188 85 C180 77 167 80 167 90 C167 100 178 102 185 95 C191 89 188 85 188 85Z" fill="#9ABF78" opacity="0.58"/>

        <path d="M170 120 C162 113 149 116 148 126 C147 136 159 138 166 131 C173 124 170 120 170 120Z" fill="#6B8C52" opacity="0.75"/>
        <path d="M158 115 C150 108 137 112 137 122 C137 131 148 133 155 126 C161 119 158 115 158 115Z" fill="#5A7A42" opacity="0.62"/>

        <path d="M160 150 C152 142 138 145 137 156 C136 166 148 168 156 161 C163 154 160 150 160 150Z" fill="#7AAB5A" opacity="0.72"/>
        <path d="M148 158 C140 151 127 155 127 165 C127 175 139 176 145 169 C151 162 148 158 148 158Z" fill="#5A7A42" opacity="0.58"/>

        <path d="M175 175 C169 168 158 171 157 180 C156 189 167 190 172 184 C177 178 175 175 175 175Z" fill="#9ABF78" opacity="0.48" transform="rotate(20 165 182)"/>
        <path d="M140 185 C134 179 123 182 122 191 C121 199 132 200 137 194 C141 188 140 185 140 185Z" fill="#7AAB5A" opacity="0.4" transform="rotate(-10 130 191)"/>
      </g>
    </svg>
  )
}

// Horizontal sprig divider — thin stems with paired leaves
export function SmallBranch({ className = '' }) {
  return (
    <svg viewBox="0 0 200 50" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.8">
        {/* Central stem */}
        <path d="M30 25 C70 23 130 23 170 25" stroke="#5A7A42" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* Left sprigs */}
        <path d="M55 25 C50 16 44 12 37 11" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M55 25 C51 33 46 37 39 38" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M75 24 C70 15 64 11 57 10" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M75 24 C71 33 66 37 59 39" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        {/* Right sprigs */}
        <path d="M125 24 C120 15 114 11 107 10" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M125 24 C121 33 116 37 109 39" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M145 25 C140 16 134 12 127 11" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <path d="M145 25 C141 33 136 37 129 38" stroke="#6B8C52" strokeWidth="0.8" fill="none" strokeLinecap="round"/>

        {/* Leaves — teardrop shapes */}
        <path d="M36 10 C30 5 22 8 22 15 C22 21 31 22 35 17 C38 13 36 10 36 10Z" fill="#7AAB5A" opacity="0.75"/>
        <path d="M38 38 C32 44 24 41 24 34 C24 28 33 27 37 32 C40 36 38 38 38 38Z" fill="#5A7A42" opacity="0.7"/>
        <path d="M56 9 C50 4 42 7 42 14 C42 20 51 21 55 16 C58 12 56 9 56 9Z" fill="#9ABF78" opacity="0.68"/>
        <path d="M58 39 C52 45 44 42 44 35 C44 29 53 28 57 33 C60 37 58 39 58 39Z" fill="#6B8C52" opacity="0.65"/>
        <path d="M106 9 C100 4 92 7 92 14 C92 20 101 21 105 16 C108 12 106 9 106 9Z" fill="#7AAB5A" opacity="0.72"/>
        <path d="M108 39 C102 45 94 42 94 35 C94 29 103 28 107 33 C110 37 108 39 108 39Z" fill="#5A7A42" opacity="0.68"/>
        <path d="M126 10 C120 5 112 8 112 15 C112 21 121 22 125 17 C128 13 126 10 126 10Z" fill="#9ABF78" opacity="0.65"/>
        <path d="M128 38 C122 44 114 41 114 34 C114 28 123 27 127 32 C130 36 128 38 128 38Z" fill="#6B8C52" opacity="0.62"/>

        {/* Floating tiny accent leaves */}
        <path d="M90 16 C86 12 80 14 80 19 C80 24 86 24 89 21 C91 18 90 16 90 16Z" fill="#9ABF78" opacity="0.5" transform="rotate(-10 85 19)"/>
        <path d="M100 30 C96 35 90 33 90 28 C90 23 96 23 99 27 C101 30 100 30 100 30Z" fill="#7AAB5A" opacity="0.45" transform="rotate(8 95 28)"/>
      </g>
    </svg>
  )
}

// Ocean wave divider — Mediterranean
export function WaveDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 400 50" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="none">
      <g opacity="0.55">
        <path d="M0 28 C40 18 80 36 120 26 C160 16 200 36 240 26 C280 16 320 36 360 26 C380 21 390 24 400 26 L400 50 L0 50Z"
          fill="#7ABDD6" opacity="0.4"/>
        <path d="M0 34 C30 24 70 42 110 32 C150 22 190 42 230 32 C270 22 310 42 350 32 C375 27 390 30 400 34 L400 50 L0 50Z"
          fill="#3B8AB0" opacity="0.45"/>
        <path d="M0 42 C25 34 55 46 90 40 C125 33 155 46 190 40 C225 33 255 46 290 40 C325 33 360 45 400 42 L400 50 L0 50Z"
          fill="#1A6080" opacity="0.5"/>
        <path d="M10 34 C22 32 34 35 46 34 M90 30 C102 28 114 31 126 30 M170 36 C182 34 194 37 206 36 M250 32 C262 30 274 33 286 32 M330 35 C342 33 356 36 368 35"
          stroke="white" strokeWidth="0.8" fill="none" opacity="0.45"/>
      </g>
    </svg>
  )
}

// Coastal scene divider
export function CoastalDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 400 70" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="none">
      <rect x="0" y="0" width="400" height="35" fill="#D4EBF5" opacity="0.25"/>
      <path d="M0 34 C30 28 60 24 90 26 C110 27 125 31 140 34 L0 34Z" fill="#3A5220" opacity="0.2"/>
      <path d="M300 34 C320 30 345 31 370 34 C360 33 350 31 340 32 C330 33 315 34 300 34Z" fill="#C4623A" opacity="0.25"/>
      <path d="M350 34 C365 30 382 31 400 34 C390 33 378 31 365 32Z" fill="#9E4A28" opacity="0.28"/>
      <path d="M0 34 C50 30 100 38 150 32 C200 26 250 38 300 32 C340 27 370 34 400 32 L400 70 L0 70Z" fill="#3B8AB0" opacity="0.32"/>
      <path d="M0 42 C40 36 80 44 120 38 C170 31 210 44 260 38 C300 32 350 42 400 38 L400 70 L0 70Z" fill="#1A6080" opacity="0.42"/>
      <path d="M20 36 C35 34 50 37 65 36 M120 33 C135 31 150 34 165 33 M220 37 C235 35 250 38 265 37 M320 34 C335 32 350 35 365 34"
        stroke="#D4EBF5" strokeWidth="0.7" fill="none" opacity="0.5"/>
    </svg>
  )
}
