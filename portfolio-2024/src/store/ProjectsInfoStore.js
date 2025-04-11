import { defineStore } from 'pinia'
import { ProjectInfo } from '@/composables/ProjectInfo.js'
import { ProjectKeypointInfo } from '@/composables/ProjectKeypointInfo.js'
import {allProjectsTags, keypointContentType} from '@/composables/Enums.js'
import { allKeypointsTags } from '@/composables/Enums.js'

import inrsPitch from '@/components/projects/inrs/InrsPitch.vue'
import dofusPitch from '@/components/projects/dofus/DofusPitch.vue'
import rsmPitch from '@/components/projects/rsm/RsmPitch.vue'
import bobyPitch from '@/components/projects/boby/BobyPitch.vue'

import esquirelPitch from '@/components/projects/esquirel/EsquirelPitch.vue'
import jabPitch from '@/components/projects/jab/JabPitch.vue'
import esquirelFogKeypointDescription from "@/components/projects/esquirel/EsquirelFogKeypointDescription.vue";
import dofusKeypointDescriptionImproveUI from "@/components/projects/dofus/DofusKeypointDescriptionImproveUI.vue";
import dofusKeypointDescriptionWorkflow from "@/components/projects/dofus/DofusKeypointDescriptionWorkflow.vue";
import dofusKeypointDescriptionTacticalCombat
  from "@/components/projects/dofus/DofusKeypointDescriptionTacticalCombat.vue";
import dofusKeypointDescriptionOthersTasks from "@/components/projects/dofus/DofusKeypointDescriptionOthersTasks.vue";
import bobyKeypointDescriptionModularity from "@/components/projects/boby/BobyKeypointDescriptionModularity.vue";
import bobyKeypointDescriptionAccessibility from "@/components/projects/boby/BobyKeypointDescriptionAccessibility.vue";
import bobyKeypointDescriptionIntegration from "@/components/projects/boby/BobyKeypointDescriptionIntegration.vue";
import bobyKeypointDescriptionWorkflow from "@/components/projects/boby/BobyKeypointDescriptionWorkflow.vue";

//TODO:import the generated files
import {
  bobyKeypointWorkflow,
  dofusKeypointWorkflow, esquirelKeypointTools, inrsKeypointSteam, jabKeypointOptimization,
  rsmKeypointContentConcept1,
  rsmKeypointContentConcept2,
  rsmKeypointContentConcept3,
  rsmKeypointContentConcept4,
  rsmKeypointContentConcept5,
  rsmKeypointContentProducing1,
  rsmKeypointContentProducing2,
  rsmKeypointContentProducing3,
  rsmKeypointContentProducing4,
  rsmKeypointContentProducing5,
  rsmKeypointContentPrototype1,
  rsmKeypointContentPrototype2,
  rsmKeypointContentPrototype3, rsmKeypointContentPrototype4, rsmKeypointContentPrototype5
} from "@/utils/generated/projectKeypointImagesImports.js"
import {
  bobyOverviewPicture,
  dofusOverviewPicture, esquirelOverviewPicture, iNRSOverviewPicture, jabOverviewPicture,
  rSMOverviewPicture,
} from "@/utils/generated/projectOverviewImagesImports.js"
import {markRaw} from "vue";


export const useProjectInfoStore = defineStore('projectsInfoStore', {
  state: () => ({
    allProjectsInfo: {
      dofusBetaProject: new ProjectInfo(
        'Dofus 3.0 Open Beta',
        '20-year-old fantasy MMORPG with turn-based combat',
        [
          allProjectsTags.ankama,
          allProjectsTags.internship,
          allProjectsTags.unity,
          allProjectsTags.cSharp,
          allProjectsTags.patchs,
        ],
        dofusOverviewPicture,
        'July 2024 until October 2024 (3 months)','Team ≈70 members, including ≈20 of Game Programmers spread across Client and Server departments, as well as Game Designers, Level Designers, UX/UI Designers, QA specialists, Project Managers, and Game Artists.',
        'Client Game Programmer',
        dofusPitch,
        'dIsIL1yv6iA',
        [
          new ProjectKeypointInfo(
            'Follow the Dofus Workflow',
            dofusKeypointDescriptionWorkflow,
            [
              allKeypointsTags.architecture,
              allKeypointsTags.versionControl,
              allKeypointsTags.pipeline,
              allKeypointsTags.patches,
            ],
           dofusKeypointWorkflow,
            keypointContentType.image,
          ),
          new ProjectKeypointInfo(
            'Improve User Interfaces',
            dofusKeypointDescriptionImproveUI,
            [
              allKeypointsTags.ui,
              allKeypointsTags.optimization,
            ],
            'rocket.png',
            keypointContentType.image,
          ),
          new ProjectKeypointInfo(
            'Work on tactical combat system',
            dofusKeypointDescriptionTacticalCombat,
            [
              allKeypointsTags.combat,
              allKeypointsTags.network,
              allKeypointsTags.ui,
            ],
            'test.png',
            keypointContentType.image,
          ),
          new ProjectKeypointInfo(
            'Program on others systems',
            dofusKeypointDescriptionOthersTasks,
            [
              allKeypointsTags.controller,
              allKeypointsTags.ui,
              allKeypointsTags.sound,
            ],
            'ProjectsOverview.mp4',
            keypointContentType.video,
          ),
        ],
        'green',
        'yellow',
        '/dofusbeta',
      ),
      rsmProject: new ProjectInfo(
        '[WIP] RSM',
        'Semi-cooperative social horror game at 4 players',
        [
          allProjectsTags.studentProject,
          allProjectsTags.wip,
          allProjectsTags.unreal,
          allProjectsTags.cPlusPlus,
          allProjectsTags.blueprints,
        ],
        rSMOverviewPicture,
        'March 2024 until June 2024 / October 2024 until June 2025 (10 months)',
        '2 Game Programmers, 2 Game Designers, 4 Game Artists',
        'Producer, Gameplay Programmer',
        rsmPitch,
        'T7cDLjUOEEQ',
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
            [rsmKeypointContentConcept1, rsmKeypointContentConcept2, rsmKeypointContentConcept3, rsmKeypointContentConcept4, rsmKeypointContentConcept5],
            keypointContentType.swiper,
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
            [rsmKeypointContentProducing1, rsmKeypointContentProducing2, rsmKeypointContentProducing3, rsmKeypointContentProducing4, rsmKeypointContentProducing5],
            keypointContentType.swiper,
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
            'fZ6ramtZYAE',
            keypointContentType.video,
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
            [rsmKeypointContentPrototype1, rsmKeypointContentPrototype2,rsmKeypointContentPrototype3, rsmKeypointContentPrototype4, rsmKeypointContentPrototype5],
            keypointContentType.swiper,
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
       iNRSOverviewPicture,
        'October 2023 to January 2024 (4 months)',
        '4 Game Designers, 2 Game Programmers',
        'Gameplay Programmer',
        inrsPitch,
        'V7y_USOCUTQ',
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
            keypointContentType.video,
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
            keypointContentType.image,
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
            keypointContentType.image,
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
            inrsKeypointSteam,
            keypointContentType.image,
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
        '3KgCCcElbdg',
        [
          new ProjectKeypointInfo(
            'Follow Scrum & Agile methods',
            bobyKeypointDescriptionWorkflow,
            [
              allKeypointsTags.pipeline,
            ],
           bobyKeypointWorkflow,
            keypointContentType.image,
          ),
          new ProjectKeypointInfo(
            'Design modular codebase',
            bobyKeypointDescriptionModularity,
            [
              allKeypointsTags.architecture,

            ],
            'ProjectsOverview.mp4',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Improve accessibility',
            bobyKeypointDescriptionAccessibility,
            [
              allKeypointsTags.gameFeel,
              allKeypointsTags.artIntegration,
              allKeypointsTags.physics,
            ],
            'rocket.png',
            keypointContentType.image,
          ),
          new ProjectKeypointInfo(
            'Integrate the game in the software',
           bobyKeypointDescriptionIntegration,
            [
              allKeypointsTags.php,
              allKeypointsTags.mobile,
              allKeypointsTags.QA,
            ],
            'test.png',
            keypointContentType.image,
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
        'iLXKFulKzw8',
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
            keypointContentType.video,
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
            "logo",
            keypointContentType.video,
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
            keypointContentType.image,
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
            esquirelKeypointTools,
            keypointContentType.image,
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
        'Lead Game Programmer / Tool Programmer',
        jabPitch,
        'R5A5sDkaRSw',
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
            keypointContentType.video,
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
            "logo",
            keypointContentType.video,
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
            keypointContentType.image,
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
            jabKeypointOptimization,
            keypointContentType.image,
          ),
        ],
        'red',
        'blue',
        '/jab',
      ),
    },
  }),
})
