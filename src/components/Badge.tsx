import { ProjectStatus } from "../data/ProjectStatus";
import type { ProjectStatusValue } from "../data/ProjectStatus";
import "./Badge.css";


export const colours: Record<ProjectStatusValue, {main: string, accent: string}> = {
  [ProjectStatus.inProgress]: { main: 'rgb(240, 173, 78)', accent: 'rgba(240, 173, 78, 0.1)' },
  [ProjectStatus.active]:     { main:  'rgb(92, 184, 92)', accent:  'rgba(92, 184, 92, 0.1)'  },
  [ProjectStatus.archived]:   { main:  'rgb(59, 78, 223)', accent:  'rgba(59, 78, 223, 0.1)'  }
};

export const statusMessages: Record<ProjectStatusValue, string> = {
  [ProjectStatus.inProgress]: 'Under Development',
  [ProjectStatus.active]: 'Actively Maintained',
  [ProjectStatus.archived]: 'Archived'
};


type BadgeProps = {
  status: ProjectStatusValue;
};

export default function Badge({ status }: BadgeProps) {
  return (
    <div
      className="badge"
      style={{
        '--status-tag': colours[status].main,
        '--status-tag-acc': colours[status].accent
      } as React.CSSProperties}
    >
      {statusMessages[status]}
    </div>
  );
}