import { Award, BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui";
import { ProfileSection } from "@/components/profile/ProfileSection";
import type { User } from "@/types/social";

export function ProfileDetails({ user }: { user: User }) {
  return (
    <div className="space-y-5">
      <ProfileSection title="About">
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">{user.bio}</p>
        {user.mutuals?.length ? (
          <p className="mt-4 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            Mutual connections: {user.mutuals.join(", ")}
          </p>
        ) : null}
      </ProfileSection>

      <ProfileSection title="Experience">
        <div className="space-y-4">
          {(user.experience ?? []).map((item) => (
            <div className="flex gap-3" key={item.id}>
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-orange-50 text-primary-700 dark:bg-orange-950/30 dark:text-primary-100">
                <BriefcaseBusiness size={18} />
              </span>
              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white">{item.role}</h3>
                <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  {item.company} · {item.period}
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ProfileSection>

      <ProfileSection title="Education">
        <div className="space-y-4">
          {(user.education ?? []).map((item) => (
            <div className="flex gap-3" key={item.id}>
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-sky-50 text-accent-600 dark:bg-sky-950/30">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white">{item.school}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.credential} · {item.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ProfileSection>

      <ProfileSection title="Skills">
        <div className="flex flex-wrap gap-2">
          {(user.skills ?? []).map((skill) => (
            <Badge className="gap-1.5" key={skill}>
              <Sparkles size={13} /> {skill}
            </Badge>
          ))}
        </div>
      </ProfileSection>

      <ProfileSection title="Projects">
        <div className="grid gap-3 sm:grid-cols-2">
          {(user.projects ?? []).map((project) => (
            <div
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
              key={project.id}
            >
              <h3 className="font-bold text-zinc-950 dark:text-white">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="mt-3 text-sm font-black text-primary-700 dark:text-primary-100">
                {project.metric}
              </p>
            </div>
          ))}
        </div>
      </ProfileSection>

      <ProfileSection title="Certificates">
        <div className="space-y-3">
          {(user.certificates ?? []).map((certificate) => (
            <div className="flex items-center gap-3" key={certificate.id}>
              <span className="grid size-10 place-items-center rounded-2xl bg-orange-50 text-primary-700 dark:bg-orange-950/30 dark:text-primary-100">
                <Award size={18} />
              </span>
              <div>
                <h3 className="font-bold text-zinc-950 dark:text-white">{certificate.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {certificate.issuer} · {certificate.issuedAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ProfileSection>
    </div>
  );
}
