"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link
            href="/#projects"
            className="text-blue-600 hover:underline flex items-center justify-center"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <Link
        href="/#projects"
        className="text-blue-600 hover:underline flex items-center mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to projects
      </Link>

      {/* Header Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] mb-10 overflow-hidden rounded-lg">
        <Image
          src={project.coverImg}
          alt={project.title}
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Project Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.detailedDescription}
            </p>
          </section>

          {/* My Contributions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">My Contributions</h2>
            <ol className="list-decimal pl-5 space-y-4">
              {project.contributions
                .split("\n\n")
                .map((contribution, index) => (
                  <li
                    key={index}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed pl-2"
                  >
                    {contribution}
                  </li>
                ))}
            </ol>
          </section>

          {/* Video Demo Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Demo</h2>
            <div className="space-y-6">
              {project.videos.map((video, index) => {
                // Check if this is a mobile screenshot based on filename or a property
                const isMobileScreenshot =
                  video.coverImage.src.includes("mobile") ||
                  (video as any).isMobile;

                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg ${
                      isMobileScreenshot
                        ? "aspect-[9/19] max-w-[300px] max-h-[500px] mx-auto"
                        : "aspect-video"
                    }`}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={video.coverImage}
                        alt={`${project.title} demo ${index + 1}`}
                        className={`${
                          isMobileScreenshot ? "object-contain" : "object-cover"
                        }`}
                        fill
                      />
                    </div>
                    <Link
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                        <Play size={24} className="text-black ml-1" />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div>
          {/* Project Details */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>

            <div className="mb-4">
              <h4 className="font-medium text-gray-600 dark:text-gray-400">
                Website
              </h4>
              <Link
                href={project.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                Visit site <ExternalLink size={14} className="ml-1" />
              </Link>
            </div>

            <div>
              <h4 className="font-medium text-gray-600 dark:text-gray-400 mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Interested in similar projects?
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Let's discuss how I can help bring your ideas to life.
            </p>
            <Link
              href="/#contact"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
