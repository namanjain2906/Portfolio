import React from 'react'
import AppFramedContent from '../components/AppFramedContent'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  
} from 'react-icons/si'

const techItems = [
  { icon: SiMongodb, label: 'MongoDB', color: 'text-green-400' },
  { icon: SiExpress, label: 'Express.js', color: 'text-gray-200' },
  { icon: SiReact, label: 'React', color: 'text-cyan-400' },
  { icon: SiNodedotjs, label: 'Node.js', color: 'text-green-500' },
  { icon: FaJava, label: 'Java', color: 'text-red-400' },
  { icon: SiPython, label: 'Python', color: 'text-blue-400' },
  { icon: SiMysql, label: 'MySQL', color: 'text-sky-400' },
  { icon: SiGit, label: 'Git', color: 'text-orange-400' },
  { icon: SiGithub, label: 'GitHub', color: 'text-gray-200' },
  { icon: SiVercel, label: 'Vercel', color: 'text-white' },
  { icon: VscVscode, label: 'VS Code', color: 'text-sky-500' },
]

const TechCard = ({ Icon, label, color }) => (
  <div className="w-full aspect-square rounded-2xl bg-[#2f2f2f]/90 border border-white/10 p-4 flex flex-col items-center justify-center gap-2 shadow-sm">
    <Icon className={[color, 'text-2xl'].join(' ')} />
    <span className="text-white/90 text-sm font-medium text-center">{label}</span>
  </div>
)

const TechStack = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <AppFramedContent
        safeArea={{ top: 8, right: 6, bottom: 8, left: 6 }}
        heightClass="h-[95dvh] max-h-[900px]"
        className="max-w-[430px]"
      >
        <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 pt-1 pb-3">
            <button
              onClick={() => navigate(-1)}
              className="text-white text-xl hover:text-gray-300 transition-colors"
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-white text-lg font-semibold">Tech Stack</h1>
          </div>

          {/* Grid */}
          <div className="px-5 pb-4">
            <div className="grid grid-cols-3 gap-4">
              {techItems.map((t) => (
                <TechCard key={t.label} Icon={t.icon} label={t.label} color={t.color} />
              ))}
            </div>
          </div>

          {/* Bottom spacer to avoid home bar overlap */}
          <div className="h-6" />
        </div>
      </AppFramedContent>
    </div>
  )
}

export default TechStack