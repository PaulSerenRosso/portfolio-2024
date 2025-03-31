import { defineStore } from 'pinia'
import { ProjectInfo } from '@/composables/ProjectInfo.js'
import { ProjectKeypointInfo } from '@/composables/ProjectKeypointInfo.js'
import { allProjectsTags } from '@/composables/Enums.js'
import { allKeypointsTags } from '@/composables/Enums.js'
import logo from '@/assets/manette.png'
import jabOverviewPicture from '@/assets/ProjectsOverview/JabOverviewPicture.jpg'
import dofusOverviewPicture from '@/assets/ProjectsOverview/DofusOverviewPicture.jpg'
import esquirelOverviewPicture from '@/assets/ProjectsOverview/EsquirelOverviewPicture.jpg'
import InrsOverviewPicture from '@/assets/ProjectsOverview/INRSOverviewPicture.jpg'
import bobyOverviewPicture from '@/assets/ProjectsOverview/BobyOverviewPicture.jpg'
import inrsPitch from '@/components/projects/inrs/InrsPitch.vue'
import esquirelFogKeypointDescription from '@/components/projects/esquirel/EsquirelFogKeypointDescription.vue'
import dofusPitch from '@/components/projects/dofus/DofusPitch.vue'
import rsmPitch from '@/components/projects/rsm/RsmPitch.vue'
import bobyPitch from '@/components/projects/boby/BobyPitch.vue'
import esquirelPitch from '@/components/projects/esquirel/EsquirelPitch.vue'
import jabPitch from '@/components/projects/jab/JabPitch.vue'
import EsquirelFogKeypointDescription from "@/components/projects/esquirel/EsquirelFogKeypointDescription.vue";

export const useProjectInfoStore = defineStore('projectsInfoStore', {
  state: () => ({
    allProjectsInfo: {
      dofusBetaProject: new ProjectInfo(
        'Dofus Unity Beta',
        '20-year-old fantasy MMORPG with turn-based combat',
        [
          allProjectsTags.ankama,
          allProjectsTags.internship,
          allProjectsTags.unity,
          allProjectsTags.cSharp,
          allProjectsTags.patchs,
        ],
        dofusOverviewPicture,
        'July 2024 until October 2024 (3 months)','Team ≈50 members, including ≈20 of Game Programmers spread across Client and Server departments, as well as Game Designers, Level Designers, UX/UI Designers, QA specialists, Project Managers, and Game Artists.',
        'Client Game Programmer',
        dofusPitch,
        'ProjectsOverview.mp4',
        [
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'rocket.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'test.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
        ],
        'green',
        'yellow',
        '/dofusbeta',
      ),
      rsmProject: new ProjectInfo(
        'RSM',
        'Semi-cooperative social horror game at 4 players',
        [
          allProjectsTags.studentProject,
          allProjectsTags.wip,
          allProjectsTags.unreal,
          allProjectsTags.cPlusPlus,
          allProjectsTags.blueprints,
        ],
        'test.png',
        'March 2024 until June 2024 / October 2024 until June 2025 (10 months)',
        '2 Game Programmers, 2 Game Designers, 4 Game Artists',
        'Producer, Gameplay Programmer',
        rsmPitch,
        'ProjectsOverview.mp4',
        [
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'rocket.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'test.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
        ],
        'darkenBlue',
        'green',
        '/rsm',
      ),
      inrsProject: new ProjectInfo(
        "It's not rocket science!",
        'Physic-based 2v2 party game with collaboration and sabotage',
        [
          allProjectsTags.studentProject,
          allProjectsTags.unreal,
          allProjectsTags.blueprints,
          allProjectsTags.steam,
        ],
        InrsOverviewPicture,
        'October 2023 to January 2024 (4 months)',
        '4 Game Designers, 2 Game Programmers',
        'Gameplay Programmer',
        inrsPitch,
        'ProjectsOverview.mp4',
        [
          new ProjectKeypointInfo(
            'Programmer une simulation de elastique',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'rocket.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'test.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
        ],
        'violet',
        'green',
        '/inrs',
      ),

      bobyProject: new ProjectInfo(
        'Boby',
        'Casual arcade game to web application for gamification',
        [
          allProjectsTags.internship,
          allProjectsTags.web,
          allProjectsTags.js,
          allProjectsTags.multiplateform,
          allProjectsTags.boby,
        ],
        bobyOverviewPicture,
        'July 2022 until September 2022 (2 months)',
        'Team ≈15 members, including UI/UX Designers, Web Developers, Product Owners, Marketing/Communication Managers',
        'Game designer, Gameplay Programmer',
        bobyPitch,
        'ProjectsOverview.mp4',
        [
          new ProjectKeypointInfo(
            'Test',
            EsquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
          new ProjectKeypointInfo(
            'Test',
            EsquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'rocket.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            EsquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'test.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            EsquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
        ],
        'yellow',
        'yellow',
        '/boby',
      ),
      esquirelProject: new ProjectInfo(
        'Esquirel',
        'Capture the point MOBA with ambushes and squirrels',
        [allProjectsTags.studentProject, allProjectsTags.unity, allProjectsTags.cSharp],
        esquirelOverviewPicture,
        'November 2022 until February 2023 (2 months)',
        '10 Game Programmers (pre-production) / 4 Game Designers, 2 Game Programmers, 4 Game Artists (production)',
        'Architecture programmer (pre-production) / Lead Gameplay Programmer (production)',
        esquirelPitch,
        'ProjectsOverview.mp4',
        [
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            logo,
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'test.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
        ],
        'orange',
        'green',
        '/esquirel',
      ),
      jabProject: new ProjectInfo(
        'Jab',
        'Fight-Taunt-Action game with iconic boss',
        [
          allProjectsTags.studentProject,
          allProjectsTags.unity,
          allProjectsTags.cSharp,
          allProjectsTags.mobile,
        ],
        jabOverviewPicture,
        'February 2023 until June 2023 (4 months)',
        '2 Game Programmers / 4 Game Designers, 6 Game Artists',
        'Lead Game Programmer',
        jabPitch,
        'ProjectsOverview.mp4',
        [
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            logo,
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'test.png',
            false,
          ),
          new ProjectKeypointInfo(
            'Test',
            esquirelFogKeypointDescription,
            [
              allKeypointsTags.research,
              allKeypointsTags.lead,
              allKeypointsTags.producer,
              allKeypointsTags.architecture,
            ],
            'ProjectsOverview.mp4',
            true,
          ),
        ],
        'red',
        'blue',
        '/jab',
      ),
    },
  }),
})
