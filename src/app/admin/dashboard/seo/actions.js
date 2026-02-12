"use server";
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import db from '../../../../../prisma/db';
import { verifyAdmin } from "@/lib/auth";

export const getSeoDataByPageUrl = cache(async (pageurl) => {
  try {
    const seoData = await db.seo.findFirst({
      where: { pageurl: pageurl },
    });
    return seoData;
  } catch (error) {
    console.error('Error fetching SEO data by page URL:', error);
    throw new Error('Failed to fetch SEO data by page URL');
  }
});

export async function getSeoData() {
  try {
    const seoData = await db.seo.findMany();
    // console.log('seoData', seoData);
    return seoData;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    throw new Error('Failed to fetch SEO data');
  }
}


export async function createSeoData(data) {
  await verifyAdmin();
  try {
    const seoData = await db.seo.create({ data });
    return seoData;
  } catch (error) {
    console.error('Error creating SEO data:', error);
    throw new Error('Failed to create SEO data');
  }
}

export async function updateSeoData(id, data) {
  await verifyAdmin();
  try {
    const seoData = await db.seo.update({
      where: { id: Number(id) },
      data,
    });
    return seoData;
  } catch (error) {
    console.error('Error updating SEO data:', error);
    throw new Error('Failed to update SEO data');
  }
}

export async function deleteSeoData(id) {
  await verifyAdmin();
  try {
    const seoData = await db.seo.delete({
      where: { id: Number(id) },
    });
    return seoData;
  } catch (error) {
    console.error('Error deleting SEO data:', error);
    throw new Error('Failed to delete SEO data');
  }
}
