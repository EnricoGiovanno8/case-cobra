import React from 'react';
import { Configuration, PageProps } from './page.types';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import { DesignConfigurator } from '../../../../components';

const Page = async ({ params }: PageProps) => {
  const { id } = params;

  if (!id || typeof id !== 'string') {
    return notFound();
  }

  const configuration: Configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    notFound();
  }

  const {} = configuration;

  return <DesignConfigurator />;
};

export default Page;
