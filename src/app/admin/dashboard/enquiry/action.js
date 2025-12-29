"use server";

import db from '../../../../../prisma/db';
import { verifyAdmin } from "@/lib/auth";
export async function createEnquiry(data) {
  try {
    // Optional: Validate required fields
    if (!data.fullName || !data.emailAddress) {
      throw new Error("Full name and email address are required");
    }

    const enquiry = await db.enquiry.create({
      data: {
        fullName: data.fullName,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber || "",
        companyName: data.companyName || "",
        serviceInterestedIn: data.serviceInterestedIn || "",
        projectBudget: data.projectBudget || "",
        projectDetails: data.projectDetails || "",
      },
    });

    return { success: true, data: enquiry };
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return { success: false, error: error.message };
  }
}

export async function getEnquiries(page = 1, limit = 10) {
  await verifyAdmin();
  try {
    const skip = (page - 1) * limit;

    const enquiries = await db.enquiry.findMany({
      skip,
      take: limit,
      orderBy: {
        id: 'desc', // last added first
      },
    });

    const total = await db.enquiry.count();

    return { enquiries, total };
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return { enquiries: [], total: 0 };
  }
}

export async function deleteEnquiry(id) {
  await verifyAdmin();
  try {
    const enquiry = await db.enquiry.delete({
      where: { id: Number(id) },
    });
    return enquiry;
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return { success: false, error: error.message };
  }
}


