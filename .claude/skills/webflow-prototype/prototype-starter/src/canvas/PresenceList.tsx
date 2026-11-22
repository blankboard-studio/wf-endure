// PROTOTYPE-ONLY: who is working on the prototype, and on what — a small
// list in the canvas's corner, from kit's parts (Swatch for each agent's
// colour, Dot for working/idle).
import { Dot, Swatch, Teammates } from '@weftly/components';
import { CURSOR_MS, ago, colorOf, labelOf, type Agent } from './presence';

/** The toolbar's avatars: kit's Teammates (kit 1.5 takes names and live only;
 *  going to an agent is in the list below, one click per row). */
export function PresenceAvatars({ agents }: { agents: readonly Agent[]; onGo?: (a: Agent) => void }) {
  if (!agents.length) return null;
  return (
    <span role="group" aria-label="Who is working">
      <Teammates
        people={agents.map((a) => ({
          name: labelOf(a, agents),
          live: a.state === 'working' && Date.now() - a.at < CURSOR_MS,
        }))}
      />
    </span>
  );
}

export function PresenceList({ agents, onGo }: { agents: readonly Agent[]; onGo: (a: Agent) => void }) {
  if (!agents.length) return null;
  return (
    <div className="cv-presence" role="status" aria-live="polite" aria-label="Who is working">
      {agents.map((a) => (
        <button type="button" key={a.id} className="cv-presence-row" data-idle={a.state === 'idle' ? '' : undefined} aria-label={`Go to ${labelOf(a, agents)}`} onClick={() => onGo(a)}>
          <Swatch color={colorOf(a.id)} />
          <span className="cv-presence-text">
            <span className="cv-presence-line">
              <span className="cv-strong">{labelOf(a, agents)}</span>
              <Dot tone={a.state === 'working' ? 'ok' : 'neutral'} />
              <span className="cv-dim">{ago(a.at)}</span>
            </span>
            <span className="cv-presence-status">{a.status ?? (a.state === 'idle' ? 'Waiting' : 'Working')}</span>
            {a.task && <span className="cv-dim cv-presence-task">{a.task}</span>}
          </span>
        </button>
      ))}
    </div>
  );
}
