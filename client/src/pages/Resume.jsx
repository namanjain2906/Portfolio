import React from 'react'
import AppFramedContent from '../components/AppFramedContent'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaDownload, FaEye } from 'react-icons/fa'
import ResumePDF from '../assets/Naman_Jain_Resume_1.pdf'

const Resume = () => {
  const navigate = useNavigate()

  const viewFull = () => {
    window.open(ResumePDF, '_blank', 'noopener,noreferrer')
  }

  const downloadPdf = () => {
    const a = document.createElement('a')
    a.href = ResumePDF
    a.download = 'Naman_Jain_Resume.pdf'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <AppFramedContent
        safeArea={{ top: 8, right: 6, bottom: 8, left: 6 }}
        heightClass="h-[95dvh] max-h-[900px]"
        className="max-w-[430px]"
      >
        <div className="absolute p-1 inset-0 overflow-y-auto scrollbar-hide">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 pt-1 pb-3">
            <button
              onClick={() => navigate(-1)}
              className="text-white text-xl hover:text-gray-300 transition-colors"
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-white text-lg font-semibold">Resume</h1>
          </div>

          {/* Preview (simple iframe to match screenshot proportion) */}
          <div className="px-5 mt-1">
            <div className="bg-white rounded-md shadow overflow-hidden ">
              {/* Suppress built-in PDF toolbar by using viewer hash params */}
              <iframe
                src={`${ResumePDF}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Resume preview"
                className="w-full h-[65dvh]"
              />
            </div>
          </div>

          {/* Bottom actions (sticky bar with two buttons) */}
          <div className="px-5 pb-3 pt-3 sticky bottom-0 z-10">
            <div className="rounded-2xl bg-[#1f2a37] border border-white/10 p-2 flex items-center gap-2">
              <button
                onClick={viewFull}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 text-white px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <FaEye />
                <span className="font-medium text-xs">View Full Resume</span>
              </button>
              <button
                onClick={downloadPdf}
                className="w-12 h-12 grid place-items-center rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
                aria-label="Download Resume"
              >
                <FaDownload />
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-6" />
        </div>
      </AppFramedContent>
    </div>
  )
}

export default Resume