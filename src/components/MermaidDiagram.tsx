import mermaid from 'mermaid';
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

interface MermaidDiagramProps {
  definition: string;
  className?: string;
}

export function MermaidDiagram({ definition, className = '' }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (containerRef.current) {
      const renderDiagram = async () => {
        // Clear previous content
        containerRef.current!.innerHTML = '';

        // Configure Mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: theme === 'dark' ? 'dark' : 'default',
          securityLevel: 'loose',
          themeVariables: theme === 'dark' ? {
            primaryColor: '#3b82f6',
            primaryTextColor: '#e5e7eb',
            primaryBorderColor: '#4b5563',
            lineColor: '#6b7280',
            secondaryColor: '#1f2937',
            tertiaryColor: '#374151',
          } : undefined,
        });

        try {
          // Generate unique ID for the diagram
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          
          // Render the diagram
          const { svg } = await mermaid.render(id, definition);
          containerRef.current!.innerHTML = svg;
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          containerRef.current!.innerHTML = `<div class="text-red-500">Error rendering diagram</div>`;
        }
      };

      renderDiagram();
    }
  }, [definition, theme]);

  return (
    <div 
      ref={containerRef} 
      className={`mermaid ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}
