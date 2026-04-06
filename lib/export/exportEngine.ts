import { ProjectDefinition } from '@/types';

export function generateStaticHtml(project: ProjectDefinition, rootHtml: string): string {
  return `
<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${project.projectName} | נוצר ב-Tola</title>
  
  <!-- Tailwind CSS via CDN for standalone rendering -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Heebo', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800;900&display=swap');
    body { font-family: 'Heebo', sans-serif; margin: 0; padding: 0; overflow-x: hidden; }
    
    /* override framer-motion states so the static HTML is fully visible */
    [style*="opacity: 0"] { 
      opacity: 1 !important; 
      transform: none !important; 
    }
  </style>
</head>
<body>
  ${rootHtml}
</body>
</html>
  `.trim();
}

export function downloadProjectManifest(project: ProjectDefinition) {
  if (typeof window === 'undefined') return;
  
  const rootElement = document.getElementById('tola-render-root');
  if (!rootElement) {
    alert('לא ניתן לייצא את האתר: רכיב התצוגה המקדימה אינו מרונדר במסך כרגע.');
    return;
  }
  
  const htmlContent = generateStaticHtml(project, rootElement.outerHTML);

  const blob = new Blob([htmlContent.trim()], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `tola-site-${project.slug}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  URL.revokeObjectURL(url);
}
