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
import esquirelKeypointDescriptionFog from "@/components/projects/esquirel/EsquirelKeypointDescriptionFog.vue";
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
  bobyKeypointResponsive1, bobyKeypointResponsive2, bobyKeypointResponsive3,
  bobyKeypointWorkflow, dofusKeypointUI1, dofusKeypointUI2, dofusKeypointUI3, dofusKeypointUI4, dofusKeypointUI5,
  dofusKeypointWorkflow, esquirelKeypointTools, esquirelKeypointTools2, inrsKeypointSteam, jabKeypointOptimization,
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
import esquirelKeypointDescriptionArchitecture
  from "@/components/projects/esquirel/EsquirelKeypointDescriptionArchitecture.vue";
import esquirelKeypointDescriptionCapacityReusable
  from "@/components/projects/esquirel/EsquirelKeypointDescriptionCapacityReusable.vue";
import esquirelKeypointDescriptionTools from "@/components/projects/esquirel/EsquirelKeypointDescriptionTools.vue";
import jabKeypointDescriptionAi from "@/components/projects/jab/JabKeypointDescriptionAi.vue";
import jabKeypointDescriptionTools from "@/components/projects/jab/JabKeypointDescriptionTools.vue";
import jabKeypointDescriptionCombat from "@/components/projects/jab/JabKeypointDescriptionCombat.vue";
import jabKeypointDescriptionAiTools from "@/components/projects/jab/JabKeypointDescriptionAiTools.vue";
import inrsKeypointDescriptionSteam from "@/components/projects/inrs/InrsKeypointDescriptionSteam.vue";
import inrsKeypointDescriptionCruise from "@/components/projects/inrs/InrsKeypointDescriptionCruise.vue";
import inrsKeypointDescriptionRopeInteractions
  from "@/components/projects/inrs/InrsKeypointDescriptionRopeInteractions.vue";
import inrsKeypointDescriptionRope from "@/components/projects/inrs/InrsKeypointDescriptionRope.vue";
import rsmKeypointDescriptionConcept from "@/components/projects/rsm/RsmKeypointDescriptionConcept.vue";
import rsmKeypointDescriptionProducing from "@/components/projects/rsm/RsmKeypointDescriptionProducing.vue";
import rsmKeypointDescriptionResearch from "@/components/projects/rsm/RsmKeypointDescriptionResearch.vue";
import rsmKeypointDescriptionPrototype from "@/components/projects/rsm/RsmKeypointDescriptionPrototype.vue";


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
            [dofusKeypointUI1,dofusKeypointUI2,dofusKeypointUI4,dofusKeypointUI3,dofusKeypointUI5],
            keypointContentType.swiper,
          ),
          new ProjectKeypointInfo(
            'Work on tactical combat system',
            dofusKeypointDescriptionTacticalCombat,
            [
              allKeypointsTags.combat,
              allKeypointsTags.network,
              allKeypointsTags.ui,
            ],
            'KVFckpvYTFg',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Program on others systems',
            dofusKeypointDescriptionOthersTasks,
            [
              allKeypointsTags.controller,
              allKeypointsTags.ui,
              allKeypointsTags.sound,
            ],
            'V03zxB9SWrw',
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
            'Refine the Game Vision',
            rsmKeypointDescriptionConcept,
            [
              allKeypointsTags.gameDesign,
              allKeypointsTags.presentation,
              allKeypointsTags.communication,
            ],
            [rsmKeypointContentConcept1, rsmKeypointContentConcept2, rsmKeypointContentConcept3, rsmKeypointContentConcept4, rsmKeypointContentConcept5],
            keypointContentType.swiper,
          ),
          new ProjectKeypointInfo(
            'Organize/Coordinate a Team',
            rsmKeypointDescriptionProducing,
            [
              allKeypointsTags.producer,
              allKeypointsTags.pipeline,
              allKeypointsTags.communication,
              allKeypointsTags.presentation,


            ],
            [rsmKeypointContentProducing1, rsmKeypointContentProducing2, rsmKeypointContentProducing3, rsmKeypointContentProducing4, rsmKeypointContentProducing5],
            keypointContentType.swiper,
          ),

          new ProjectKeypointInfo(
            'Document/Prototype technical challenges',
           rsmKeypointDescriptionResearch,
            [
              allKeypointsTags.documentation,
              allKeypointsTags.research,
              allKeypointsTags.versionControl,
              allKeypointsTags.network,
            ],
            'fZ6ramtZYAE',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Program networked features',
            rsmKeypointDescriptionPrototype,
            [
              allKeypointsTags.network,
              allKeypointsTags.architecture,
              allKeypointsTags.optimization,
              allKeypointsTags.ui,
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
            'Prototype an Elastic Simulation',
            inrsKeypointDescriptionRope,
            [
              allKeypointsTags.research,
              allKeypointsTags.physics,
              allKeypointsTags.communication
            ],
            'nIlewWikTR8',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Program Hands-Blocks Interactions',
            inrsKeypointDescriptionRopeInteractions,
            [
              allKeypointsTags.physics,
              allKeypointsTags.architecture,
              allKeypointsTags.ui
            ],
            'nNDeeTLJQas',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Develop the Cruise phase',
            inrsKeypointDescriptionCruise,
            [
              allKeypointsTags.physics,
              allKeypointsTags.techArt,
              allKeypointsTags.procedural
            ],
            'Ghq8bkwuEbU',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Release game on Steam',
            inrsKeypointDescriptionSteam,
            [
              allKeypointsTags.api
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
              allKeypointsTags.communication,
            ],
           bobyKeypointWorkflow,
            keypointContentType.image,
          ),
          new ProjectKeypointInfo(
            'Design modular codebase',
            bobyKeypointDescriptionModularity,
            [
              allKeypointsTags.architecture,
              allKeypointsTags.procedural

            ],
            'PPEHnNMPOoE',
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
            'U9bwNeUB20Y',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Integrate the game in the software',
           bobyKeypointDescriptionIntegration,
            [
              allKeypointsTags.php,
              allKeypointsTags.mobile,
              allKeypointsTags.qA,
            ],
            [bobyKeypointResponsive1, bobyKeypointResponsive2, bobyKeypointResponsive3],
            keypointContentType.swiper,
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
            'Design Networked/Flexible architecture',
            esquirelKeypointDescriptionArchitecture,
            [
              allKeypointsTags.architecture,
              allKeypointsTags.network,
              allKeypointsTags.research,
              allKeypointsTags.documentation,
            ],
            'TGd118AC6WA',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Reuse behaviors for feature development',
            esquirelKeypointDescriptionCapacityReusable,
            [
              allKeypointsTags.pipeline,
              allKeypointsTags.communication,
              allKeypointsTags.combat,
              allKeypointsTags.physics,

            ],
            "VAeyjaMLUHk",
            keypointContentType.video,
          ),

          new ProjectKeypointInfo(
            'Program tools to speed up the iteration workflow.',
            esquirelKeypointDescriptionTools,
            [
              allKeypointsTags.tools,
              allKeypointsTags.pipeline,
              allKeypointsTags.api
            ],
           [ esquirelKeypointTools2,esquirelKeypointTools,],
            keypointContentType.swiper,
          ),
          new ProjectKeypointInfo(
            'Develop fog of war-related mechanics.',
            esquirelKeypointDescriptionFog,
            [
              allKeypointsTags.techArt,
              allKeypointsTags.optimization,
              allKeypointsTags.combat,
              allKeypointsTags.network,
            ],
            'MpSTuWdwAMk',
            keypointContentType.video,
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
        'R5A5sDkaRSw',
        [
          new ProjectKeypointInfo(
            'Create behavior tree tools',
            jabKeypointDescriptionAiTools,
            [
              allKeypointsTags.ai,
              allKeypointsTags.tools,
              allKeypointsTags.architecture,
              allKeypointsTags.communication
            ],
            '2xl9YyG_9_c',
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Develop mobile combat system',
            jabKeypointDescriptionCombat,
            [
              allKeypointsTags.combat,
              allKeypointsTags.controller,
              allKeypointsTags.optimization,
              allKeypointsTags.architecture,
            ],
            "Dqy_XJujVn4",
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Program Boss mechanics',
            jabKeypointDescriptionAi,
            [
              allKeypointsTags.ai,

            ],
            "nGsToxcLjuo",
            keypointContentType.video,
          ),
          new ProjectKeypointInfo(
            'Coding Trello report window',
            jabKeypointDescriptionTools,
            [
              allKeypointsTags.tools,
              allKeypointsTags.pipeline,
              allKeypointsTags.api
            ],
            "GF8PHIyv4lg",
            keypointContentType.video,
          ),
        ],
        'red',
        'blue',
        '/jab',
      ),
    },
  }),
})
