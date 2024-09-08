interface Configuration {
  id: string;
  width: number;
  height: number;
  imageUrl: string;
  croppedImageUrl?: string;
}

interface PageProps {
  params: {
    id: string | string[] | undefined;
  };
}

export type { PageProps, Configuration };
