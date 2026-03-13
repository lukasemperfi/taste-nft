export interface FileUploaderProps {
  previewUrl: string | null
  fileName: string
  fileSizeLabel: string
  maxSizeMb: number
}

export interface FileUploaderEvents {
  (e: 'trigger'): void
  (e: 'remove'): void
  (e: 'drop', files: FileList | null): void
}
