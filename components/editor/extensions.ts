import AutoJoiner from 'tiptap-extension-auto-joiner';
import CodeBlockShiki from 'tiptap-extension-code-block-shiki';
import GlobalDragHandle from 'tiptap-extension-global-drag-handle';
import {
  TiptapImage,
  TiptapLink,
  UpdatedImage,
  TaskList,
  TaskItem,
  HorizontalRule,
  StarterKit,
  Placeholder,
  AIHighlight,
  Color,
  TextStyle,
  TiptapUnderline,
  HighlightExtension,
} from 'novel/extensions';
import { UploadImagesPlugin } from 'novel/plugins';

import { cx } from 'class-variance-authority';

const aiHighlight = AIHighlight;
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cx(
      'text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer'
    ),
  },
});

const tiptapImage = TiptapImage.extend({
  addProseMirrorPlugins() {
    return [
      UploadImagesPlugin({
        imageClass: cx('opacity-40 rounded-lg border border-stone-200'),
      }),
    ];
  },
}).configure({
  allowBase64: true,
  HTMLAttributes: {
    class: cx('rounded-lg border border-muted'),
  },
});

const updatedImage = UpdatedImage.configure({
  HTMLAttributes: {
    class: cx('rounded-lg border border-muted'),
  },
});

const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cx('not-prose pl-2 '),
  },
});
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cx('flex gap-2 items-start my-4'),
  },
  nested: true,
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cx('mt-4 mb-6 border-t border-muted-foreground'),
  },
});

const codeBlockLowLight = CodeBlockShiki.configure({
  defaultTheme: 'dracula',
  HTMLAttributes: {
    class: cx(
      'rounded-md bg-[#1A1B26] text-muted-foreground border p-5 font-mono font-medium relative'
    ),
    spellcheck: false,
  },
  defaultLanguage: 'typescript',
});

const placeholder = Placeholder.configure({
  placeholder: 'Start typing...!',
  emptyEditorClass: 'is-editor-empty',
});

const starterKit = StarterKit.configure({
  bulletList: {
    HTMLAttributes: {
      class: cx('list-disc list-outside leading-3'),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cx('list-decimal list-outside leading-3'),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cx('leading-normal ml-4'),
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: cx('border-l-4 pl-2 border-primary'),
    },
  },
  codeBlock: false,
  code: {
    HTMLAttributes: {
      class: cx('rounded-md bg-muted px-1.5 py-1 font-mono font-medium'),
      spellcheck: 'false',
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: '#DBEAFE',
    width: 4,
  },
  gapcursor: false,
});

export const defaultExtensions = [
  starterKit,
  placeholder,
  tiptapLink,
  tiptapImage,
  updatedImage,
  taskList,
  taskItem,
  horizontalRule,
  aiHighlight,
  // GlobalDragHandle,
  AutoJoiner,
  Color,
  TextStyle,
  TiptapUnderline,
  HighlightExtension,
  codeBlockLowLight,
];
