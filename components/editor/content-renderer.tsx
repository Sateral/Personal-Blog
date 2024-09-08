'use client';

import { defaultExtensions } from '@/components/editor/extensions';
import { EditorRoot, EditorContent } from 'novel';

interface ContentRendererProps {
  content: any;
}

const extensions = [...defaultExtensions];

const ContentRenderer = ({ content }: ContentRendererProps) => {
  return (
    <EditorRoot>
      <EditorContent
        initialContent={content}
        extensions={extensions}
        editable={false}
        immediatelyRender={false}
        className='p-4'
      />
    </EditorRoot>
  );
};

export default ContentRenderer;
