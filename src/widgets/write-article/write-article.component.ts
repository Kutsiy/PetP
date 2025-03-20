import { Component } from '@angular/core';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
@Component({
  selector: 'app-write-articlewidget',
  standalone: false,

  templateUrl: './write-article.component.html',
  styleUrl: './write-article.component.scss',
})
export class WriteArticleWidgetComponent {
  quillText: string | null = null;
  categories = [
    { value: 'About me', viewValue: 'About me' },
    { value: 'News about programming', viewValue: 'News about programming' },
  ];

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: [1, 2, 3, false] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['code-block'],
    ],
  };

  imageUrl: string | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onContentChanged(event: any) {
    const delta = event.editor.getContents();
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
    this.quillText = converter.convert();
  }
}
