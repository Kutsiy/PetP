import { Component } from '@angular/core';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { PostsService } from '../../features';

@Component({
  selector: 'app-write-articlewidget',
  standalone: false,

  templateUrl: './write-article.component.html',
  styleUrl: './write-article.component.scss',
})
export class WriteArticleWidgetComponent {
  constructor(private readonly postService: PostsService) {}

  quillText: string | null = null;
  categories = [
    { value: 'About me', viewValue: 'About me' },
    { value: 'News about programming', viewValue: 'News about programming' },
    { value: 'Travel', viewValue: 'Travel' },
    { value: 'Food & Cooking', viewValue: 'Food & Cooking' },
    { value: 'Lifestyle', viewValue: 'Lifestyle' },
    { value: 'Health & Fitness', viewValue: 'Health & Fitness' },
    { value: 'Photography', viewValue: 'Photography' },
    { value: 'Music', viewValue: 'Music' },
    { value: 'Movies & TV', viewValue: 'Movies & TV' },
    { value: 'Books & Literature', viewValue: 'Books & Literature' },
    { value: 'Art & Design', viewValue: 'Art & Design' },
    { value: 'Fashion', viewValue: 'Fashion' },
    { value: 'Gaming', viewValue: 'Gaming' },
    { value: 'Education', viewValue: 'Education' },
    { value: 'Finance & Investing', viewValue: 'Finance & Investing' },
    { value: 'Relationships', viewValue: 'Relationships' },
    {
      value: 'Spirituality & Mindfulness',
      viewValue: 'Spirituality & Mindfulness',
    },
    { value: 'Home & Garden', viewValue: 'Home & Garden' },
    { value: 'Parenting', viewValue: 'Parenting' },
    { value: 'DIY & Crafts', viewValue: 'DIY & Crafts' },
    { value: 'Science & Nature', viewValue: 'Science & Nature' },
    { value: 'History & Culture', viewValue: 'History & Culture' },
  ];
  title: string | null = null;
  prevFile: File | null = null;
  description: string | null = null;
  selected: string | null = null;
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image', 'video'],
      [{ header: [1, 2, 3, false] }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  created: any;

  error: any;

  imageUrl: string | null = null;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.title = target.value;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.prevFile = file;
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
    this.description = this.truncateByWords(event.text, 40);
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {
      paragraphTag: 'p',
    });
    this.quillText = converter.convert();
  }

  truncateByWords(text: string, wordLimit: number) {
    const words = text.trim().split('');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join('');
  }

  onSubmit = () => {
    if (
      this.title &&
      this.quillText &&
      this.selected &&
      this.prevFile &&
      this.description
    ) {
      this.error = false;
      this.created = true;
      this.postService
        .createPost(
          this.title,
          this.quillText,
          this.selected,
          this.prevFile,
          this.description
        )
        ?.subscribe((res) => {});
    } else {
      this.error = true;
    }
  };
}
