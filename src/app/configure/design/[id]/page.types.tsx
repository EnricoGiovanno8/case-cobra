interface BaseConfiguration {
  id: string;
  width: number;
  height: number;
  imageUrl: string;
  croppedImageUrl: string | null;
}

type Configuration = BaseConfiguration | null;

interface PageProps {
  params: {
    id: string | string[] | undefined;
  };
}

export type { PageProps, Configuration };
