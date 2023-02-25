import { jsPDF as JSPDF } from 'jspdf'

export function useDownloadCV () {
  const downloadCV = () => {
    const doc = new JSPDF('portrait', 'px', 'a4', false)
    doc.addImage('./resume/Web Developer - David Prado.png', 'PNG', 0, 0, 460, 652)
    doc.save('Web Developer - David Prado.pdf')
  }
  return { downloadCV }
}
