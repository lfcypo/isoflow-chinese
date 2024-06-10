/* eslint-disable import/no-extraneous-dependencies */
import { Colors, Icons, InitialData } from 'src/Isoflow';
import { flattenCollections } from '@isoflow/isopacks/dist/utils';
import isoflowIsopack from '@isoflow/isopacks/dist/isoflow';
import awsIsopack from '@isoflow/isopacks/dist/aws';
import gcpIsopack from '@isoflow/isopacks/dist/gcp';
import azureIsopack from '@isoflow/isopacks/dist/azure';
import kubernetesIsopack from '@isoflow/isopacks/dist/kubernetes';

const isopacks = flattenCollections([
  isoflowIsopack,
  awsIsopack,
  azureIsopack,
  gcpIsopack,
  kubernetesIsopack
]);

export const colors: Colors = [
  {
    id: 'color1',
    value: '#a5b8f3'
  },
  {
    id: 'color2',
    value: '#bbadfb'
  },
  {
    id: 'color3',
    value: '#f4eb8e'
  },
  {
    id: 'color4',
    value: '#f0aca9'
  },
  {
    id: 'color5',
    value: '#fad6ac'
  },
  {
    id: 'color6',
    value: '#a8dc9d'
  },
  {
    id: 'color7',
    value: '#b3e5e3'
  }
];

export const icons: Icons = isopacks;

export const initialData: InitialData = {
  title: '机场管理软件系统',
  icons,
  colors,
  items: [
    {
      id: 'item1',
      name: '机场运营数据库',
      icon: 'storage',
      description:
        '<p>每个机场都有自己的中央数据库，用于存储和更新有关每日航班、季节性时刻表、可用资源和其他航班相关信息（如计费数据和航班费用）的所有必要数据。AODB是机场运作的关键特征。</p><p><br></p><p>此数据库连接到其余的机场模块：<em>机场信息系统、收入管理系统和空中交通管理系统</em>.</p><p><br></p><p>该系统可以为不同的用户群体提供不同的信息：乘客、机场工作人员、机组人员或特定部门、合作伙伴或警察局。</p><p><br></p><p>AODB表示图形显示上的信息。</p><p><br></p><p><strong>AODB函数包括：</strong></p><p>- 参考数据处理</p><p>- 季节性调度</p><p>- 每日航班时刻表处理</p><p>- 付款处理</p>'
    },
    {
      id: 'bc6fdded-a090-4eae-b1fe-fe0ee0fd1c92',
      name: '陆侧作业',
      icon: 'office',
      description:
        '<p>该子系统为乘客提供服务，并维护航站楼、停车设施和车辆交通。客运业务包括行李处理和贴标签。</p>'
    },
    {
      id: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f',
      name: '旅客便利服务',
      icon: 'user',
      description:
        '<p>包括旅客处理（办理登机手续、登机、边境管制）和行李处理（贴标签、托运和处理）。服务人员跟着乘客上班车，把他们送到航班上。到达操作包括登机控制和行李处理。</p>'
    },
    {
      id: 'a147b06a-324a-47ab-9e16-ac9101aa3d28',
      name: '边境管制（海关和安全服务）',
      icon: 'block',
      description:
        '<p>在机场，安全服务通常包括周边安全、终端安全和边境控制。这些服务需要生物识别认证并集成到政府系统中，以允许海关官员查看乘客的状态。</p>'
    },
    {
      id: '4a27ed88-abf2-448b-af07-5d2b6ebdb67f',
      name: '通用服务（自助值机系统）',
      icon: 'block',
      description:
        '<p>机场必须保证客流畅通。各种各样的&nbsp;数字自助服务：值机亭、自动自助门。自助服务选项，尤其是值机亭，仍然很受欢迎。</p>'
    },
    {
      id: 'c54ab120-44d2-46d2-9fc1-efd83ab67307',
      name: '行李处理',
      icon: 'block',
      description:
        '<p>乘客在行李上飞机前必须先托运。显示并跟踪行李装载的时间，直到到达目的地并将行李归还给失主。</p>'
    },
    {
      id: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05',
      name: '终端管理系统',
      icon: 'function-module',
      description:
        '<p>包括资产、建筑物、电网、环境系统和垂直运输组织的管理系统的维护和监控。它还促进了工作人员的沟通和管理。</p>'
    },
    {
      id: '040dfb11-f920-48cf-bf96-64234db1b7e8',
      name: '维护和监控',
      icon: 'block'
    },
    {
      id: 'a71d7911-261d-4b6e-895a-27765baf0403',
      name: '资源管理',
      icon: 'block'
    },
    {
      id: '67895813-ac6f-4dd4-9ae2-e994e9a5aa09',
      name: '员工管理',
      icon: 'block',
      description:
        '<p>工作人员模块提供有关机场正在进行的进程的必要信息，例如航班数据(采用国际民航组织或联合技术标准格式)和其他重要事件，以便使负责的工作人员随时了解最新情况。信息通过机场无线电系统分发，或显示在通过机场局域网连接的个人电脑或移动设备上。</p>'
    },
    {
      id: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a',
      name: '信息管理',
      icon: 'queue',
      description:
        '<p>该子系统负责日常航班信息的采集和分发，季节和到达出发信息的存储，以及与航空公司的连接。</p>'
    },
    {
      id: '00ff4dc0-09f9-4932-aa90-6c207da2989b',
      name: '公共广播(PA)系统',
      icon: 'block',
      description:
        '<p>通知乘客和机场工作人员任何重要的变化和过程，例如登机口、到达时间、电话和警报。此外，信息可以传达给飞行员，飞机工作人员，机组人员等。扩音系统通常包括通过扬声器广播的语音信息。</p>'
    },
    {
      id: '791abb72-5481-4713-88a8-a9fe51cb5408',
      name: '飞行情报显示系统(FIDS)',
      icon: 'block',
      description:
        '<p>显示登机状态、登机口、飞机、航班号和其他航班详细信息。计算机控制连接到数据管理系统的屏幕，实时显示有关航班的最新信息。一些机场以应用程序的形式或在其网站上设置了数字机场识别系统。此外，显示器还可以显示其他公共信息，如天气、新闻、安全信息、菜单和广告。机场可以选择输入信息的类型、语言和方式，无论是手动输入还是从中央数据库加载。</p>'
    },
    {
      id: 'fe621de2-793b-42f9-968e-4cac33b8d5fe',
      name: '自动码头信息服务(ATIS)',
      icon: 'block',
      description:
        '<p>向飞行员和机组人员广播天气报告、跑道状况或其他当地信息。<p><br><p><p>一些机场软件供应商提供现成的解决方案来促进特定的任务，如维护或机场运营。然而，它们中的大多数都提供集成系统，包括用于多种操作的模块。</p>'
    },
    {
      id: '24d4a8b3-6056-4c3f-8f0b-143683509438',
      name: '登机区操作',
      icon: 'plane',
      description:
        '<p>包括处理飞机着陆和导航、机场交通管理、跑道管理和地面处理安全的系统。</p>'
    },
    {
      id: '2ac34480-95cc-4b01-8efd-683ec46fcd68',
      name: '地勤',
      icon: 'block',
      description:
        '<p>地勤负责飞机维修。这包括乘客登机和引导、货物和邮件装载以及停机坪服务。停机坪服务包括飞机引导、清洁、排水、除冰、餐饮和加油。在这一阶段，该软件有助于处理有关行李重量和货物负荷、乘客数量、登机桥停车以及必须向飞机提供的地面服务等信息。通过将这些信息输入到系统中，他们的成本就可以通过计费系统计算出来并开具发票。</p>'
    },
    {
      id: '9172d115-93ae-4e89-bd75-4979b7f8a49a',
      name: 'ATC空中交通管制塔',
      icon: 'block',
      description:
        '<p>空中交通管制塔是一种对飞机进行空中和地面控制的结构。它通过引导和导航车辆和飞机来确保安全。它是通过空中和地面的视觉信号、雷达和无线电通信来实现的。塔台的主要重点是确保所有飞机都被分配到正确的地方，乘客不会有危险，飞机将在停机坪上分配一个合适的乘客登机桥。</p>< br></p><p>空管塔台有一个控制室，作为机场陆侧(航站楼)和空侧操作之间的通道。控制室人员的任务是确保乘客的安全和安全以及地面处理。通常，控制室有闭路电视监视器和空中交通管制系统，以维持航站楼和停机坪的秩序。</p>'
    },
    {
      id: '2db4a232-2cf3-4277-9cd4-e2c0a35a4eac',
      name: '航空固定电信网络(AFTN)系统',
      icon: 'block',
      description:
        '<p>AFTN系统处理包括导航服务在内的通信和数据交换。通常，机场交换交通环境信息、安全信息、有关天气、地理材料、中断等信息。它们是机场和飞机之间的通讯工具。<p><br><p><p> <p>航空通信软件存储飞行计划和飞行信息，以国际民航组织格式和UTC格式输入。存储的信息可用于计划和统计目的。对于机场来说，重要的是要了解飞机的类型和重量，以便将其分配到跑道上的正确位置。AFTN系统保存以下信息:<p><p><br><p><p>-飞机登记<p><p>-跑道使用<p><p>-着陆和起飞的实际时间<p><p>-电路数量<p><p>-进近的数量和类型<p><p>-到达和起飞的新估计<p><p>-新的航班信息<p><p><br><p><p>空中交通管理是从ATC塔台执行的。</p>'
    },
    {
      id: 'b46088d6-7bd4-4ccf-9d35-cf56a891d869',
      name: '发票和开票',
      icon: 'paymentcard',
      description:
        '<p>机场处理的每一个航班都为机场产生一定的收入，由运营飞机的航空公司支付。航空发票系统使支付任何类型和大小的飞机成为可能。它接受多种货币的现金和信用卡支付。收费也扩展到ATC服务。<p><p><br><p><p> <p>根据飞机类型、重量和提供的地面服务，机场可以计算航空费用并开具发票。&nbsp;它使用以下数据计算:<p><p><br><p><p>-飞机登记<p><p>-在机场停车时间<p><p>-机场出发或降落点<p><p>-在不同入境或出发点的时间<p><p><br><p><p>数据是从ATC输入或集成的。根据这些信息，机场计算费用并发送账单。</p>'
    },
    {
      id: 'afa7b887-8aff-45a6-86fa-7a896626e920',
      name: 'ATC塔计费',
      icon: 'block'
    },
    {
      id: 'd917b7d7-a5c4-479e-a366-da8d22ea8ebb',
      name: '非航空收入',
      icon: 'block'
    }
  ],
  views: [
    {
      id: 'overview',
      name: '概述',
      items: [
        {
          labelHeight: 80,
          id: 'd917b7d7-a5c4-479e-a366-da8d22ea8ebb',
          tile: { x: 5, y: -11 }
        },
        {
          labelHeight: 80,
          id: 'afa7b887-8aff-45a6-86fa-7a896626e920',
          tile: { x: 2, y: -11 }
        },
        {
          labelHeight: 80,
          id: 'b46088d6-7bd4-4ccf-9d35-cf56a891d869',
          tile: { x: 4, y: -7 }
        },
        {
          labelHeight: 80,
          id: '2db4a232-2cf3-4277-9cd4-e2c0a35a4eac',
          tile: { x: 16, y: -3 }
        },
        {
          labelHeight: 80,
          id: '9172d115-93ae-4e89-bd75-4979b7f8a49a',
          tile: { x: 16, y: 0 }
        },
        {
          labelHeight: 80,
          id: '2ac34480-95cc-4b01-8efd-683ec46fcd68',
          tile: { x: 16, y: 3 }
        },
        {
          labelHeight: 80,
          id: '24d4a8b3-6056-4c3f-8f0b-143683509438',
          tile: { x: 11, y: 0 }
        },
        {
          labelHeight: 80,
          id: 'fe621de2-793b-42f9-968e-4cac33b8d5fe',
          tile: { x: 7, y: 12 }
        },
        {
          labelHeight: 80,
          id: '791abb72-5481-4713-88a8-a9fe51cb5408',
          tile: { x: 4, y: 12 }
        },
        {
          labelHeight: 80,
          id: '00ff4dc0-09f9-4932-aa90-6c207da2989b',
          tile: { x: 1, y: 12 }
        },
        {
          labelHeight: 80,
          id: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a',
          tile: { x: 4, y: 6 }
        },
        {
          labelHeight: 80,
          id: '67895813-ac6f-4dd4-9ae2-e994e9a5aa09',
          tile: { x: -11, y: 8 }
        },
        {
          labelHeight: 80,
          id: 'a71d7911-261d-4b6e-895a-27765baf0403',
          tile: { x: -8, y: 8 }
        },
        {
          labelHeight: 80,
          id: '040dfb11-f920-48cf-bf96-64234db1b7e8',
          tile: { x: -5, y: 8 }
        },
        {
          labelHeight: 80,
          id: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05',
          tile: { x: -5, y: 4 }
        },
        {
          labelHeight: 80,
          id: 'c54ab120-44d2-46d2-9fc1-efd83ab67307',
          tile: { x: -11, y: -9 }
        },
        {
          labelHeight: 80,
          id: '4a27ed88-abf2-448b-af07-5d2b6ebdb67f',
          tile: { x: -8, y: -9 }
        },
        {
          labelHeight: 80,
          id: 'a147b06a-324a-47ab-9e16-ac9101aa3d28',
          tile: { x: -5, y: -9 }
        },
        {
          labelHeight: 180,
          id: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f',
          tile: { x: -5, y: -4 }
        },
        {
          labelHeight: 180,
          id: 'bc6fdded-a090-4eae-b1fe-fe0ee0fd1c92',
          tile: { x: -4, y: 0 }
        },
        { id: 'item1', tile: { x: 4, y: 0 }, labelHeight: 140 }
      ],
      connectors: [
        {
          id: '527b88f3-4b50-4639-9802-cfc475cd08aa',
          color: 'color6',
          anchors: [
            {
              id: 'abe857f8-6219-4030-b5cf-6a7de2bff9be',
              ref: { item: 'd917b7d7-a5c4-479e-a366-da8d22ea8ebb' }
            },
            {
              id: '21b9d415-1429-4e68-9b35-46705c32e8a4',
              ref: { tile: { x: 5, y: -10 } }
            },
            {
              id: '0e768e42-228d-44c5-bc30-c8d40ebb69c6',
              ref: { tile: { x: 4, y: -10 } }
            },
            {
              id: 'c9d4b849-a044-4c43-9e8a-ec370cac7dd6',
              ref: { item: 'b46088d6-7bd4-4ccf-9d35-cf56a891d869' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '073ecd08-0bff-4274-81e7-2fe35b0ac085',
          color: 'color6',
          anchors: [
            {
              id: 'aed7740d-75e5-471e-a9a0-01bbfb751a2c',
              ref: { item: 'afa7b887-8aff-45a6-86fa-7a896626e920' }
            },
            {
              id: 'eccb2e42-64cd-446c-a23a-74b8f759fdd1',
              ref: { tile: { x: 2, y: -10 } }
            },
            {
              id: 'd0f7054b-54e7-45f5-9e20-2ce766611477',
              ref: { tile: { x: 4, y: -10 } }
            },
            {
              id: 'c6fa8a43-722a-49a9-84f4-b76114322b0d',
              ref: { item: 'b46088d6-7bd4-4ccf-9d35-cf56a891d869' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '170009dd-b855-4b91-ba49-07a998cf0485',
          color: 'color6',
          anchors: [
            {
              id: '24f16db1-6a3c-44b4-978d-6aa66f0b049f',
              ref: { item: 'b46088d6-7bd4-4ccf-9d35-cf56a891d869' }
            },
            {
              id: '034ffa18-b55b-4941-acd8-02dbd8c47bfb',
              ref: { item: 'item1' }
            }
          ]
        },
        {
          id: 'ae8f457f-df03-4582-925d-4c81131608fa',
          color: 'color2',
          anchors: [
            {
              id: '39a462b8-bc96-490b-849a-1199e44cfa8a',
              ref: { item: '2db4a232-2cf3-4277-9cd4-e2c0a35a4eac' }
            },
            {
              id: 'f4d0339b-45c8-4eb7-a3be-94616a4969a5',
              ref: { tile: { x: 15, y: -3 } }
            },
            {
              id: '3b1bc55b-ceb2-416d-8f1d-722273180e83',
              ref: { tile: { x: 15, y: 0 } }
            },
            {
              id: '072adfbc-9888-434a-bae4-9639fff026a4',
              ref: { item: '24d4a8b3-6056-4c3f-8f0b-143683509438' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '4aba5eaf-e2b3-4b64-9af0-98cebafef64a',
          color: 'color2',
          anchors: [
            {
              id: '2410836d-4820-4492-8c64-d89b069ce9ec',
              ref: { item: '9172d115-93ae-4e89-bd75-4979b7f8a49a' }
            },
            {
              id: 'f583f42d-2eec-47a5-9d45-6dfd0603cb69',
              ref: { item: '24d4a8b3-6056-4c3f-8f0b-143683509438' }
            }
          ]
        },
        {
          id: '5cfb2816-10cd-4c90-b584-f045c26074c8',
          color: 'color2',
          anchors: [
            {
              id: '66854e7d-e46c-49b0-8f26-186742369158',
              ref: { item: '2ac34480-95cc-4b01-8efd-683ec46fcd68' }
            },
            {
              id: 'ffc7345f-854c-41ef-96ed-fd1cbeb4b3d6',
              ref: { tile: { x: 15, y: 3 } }
            },
            {
              id: '93e5620a-8d94-464e-bcc4-a4b20da4b6e7',
              ref: { tile: { x: 15, y: 0 } }
            },
            {
              id: 'd97de77f-ac92-42a9-892b-3e30485817ff',
              ref: { item: '24d4a8b3-6056-4c3f-8f0b-143683509438' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '7392a711-e861-4c85-b394-49e47f2dd874',
          color: 'color2',
          anchors: [
            {
              id: 'bd8d118a-f676-4ca0-bfbd-b993625aece7',
              ref: { item: '24d4a8b3-6056-4c3f-8f0b-143683509438' }
            },
            {
              id: '613866b0-e6dd-4d8a-9a67-d8ce443273ec',
              ref: { item: 'item1' }
            }
          ]
        },
        {
          id: '1e329a8d-3fc9-40ea-8e82-67b478b35f16',
          color: 'color7',
          anchors: [
            {
              id: 'dd31d564-3b3a-4428-b05c-88b243173d21',
              ref: { item: 'fe621de2-793b-42f9-968e-4cac33b8d5fe' }
            },
            {
              id: '8b9dec3b-59e3-4ddf-9a2b-12e7e6092916',
              ref: { tile: { x: 7, y: 11 } }
            },
            {
              id: '5728c55e-03b6-4faa-b801-7a342a0b7650',
              ref: { tile: { x: 4, y: 11 } }
            },
            {
              id: '3678c2f1-4c13-4959-8aaf-8d27611b6ea7',
              ref: { item: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: 'ff1c44f2-83f8-4596-a27f-54914b7da562',
          color: 'color7',
          anchors: [
            {
              id: '30064e8e-7894-4b83-833b-a171c10327e6',
              ref: { item: '791abb72-5481-4713-88a8-a9fe51cb5408' }
            },
            {
              id: 'b5aabbda-2802-4cf8-90c2-adfbc5bc5b5c',
              ref: { item: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a' }
            }
          ]
        },
        {
          id: '8c1f03c8-351a-4a39-9570-5fd4959f0272',
          color: 'color7',
          anchors: [
            {
              id: 'e8e8c135-3852-4475-96bc-6d6ec3eef8f0',
              ref: { item: '00ff4dc0-09f9-4932-aa90-6c207da2989b' }
            },
            {
              id: '56b0d80b-31b5-4960-bf01-47c2d2a9e90a',
              ref: { tile: { x: 1, y: 11 } }
            },
            {
              id: 'c42d6159-e6b8-447e-a197-0b7c761f2516',
              ref: { tile: { x: 4, y: 11 } }
            },
            {
              id: 'c858062e-faa9-410d-9a35-5090c3b42af5',
              ref: { item: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '630f5788-9f0b-44df-83f9-c60e40928617',
          color: 'color7',
          anchors: [
            {
              id: 'c258cf27-4d97-4814-8438-96c7f9fa50c0',
              ref: { item: 'cf6b6e6e-f491-4547-b4ac-c5eecba8464a' }
            },
            {
              id: '3bdd5f99-0fc8-4b35-b2be-fa5473a51bfa',
              ref: { item: 'item1' }
            }
          ]
        },
        {
          id: '2f251ef8-d35e-4b57-ad48-dcd6f81325bc',
          color: 'color1',
          anchors: [
            {
              id: '3d0c51d0-0b90-4062-90e5-306e2aa2f633',
              ref: { item: '040dfb11-f920-48cf-bf96-64234db1b7e8' }
            },
            {
              id: '46d83bb9-30a5-4856-afb2-0e91076fce62',
              ref: { item: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05' }
            }
          ]
        },
        {
          id: '965ff8f1-59e9-45ae-b484-ba6ec4f546d0',
          color: 'color1',
          anchors: [
            {
              id: 'e031f407-88d7-4606-9d0d-99ffd12662d7',
              ref: { item: 'a71d7911-261d-4b6e-895a-27765baf0403' }
            },
            {
              id: '6bffb346-eb7e-45b7-a68f-23b49eed30c2',
              ref: { tile: { x: -8, y: 6 } }
            },
            {
              id: 'bb0fb0a7-492a-411b-8f74-9218ef607259',
              ref: { tile: { x: -5, y: 6 } }
            },
            {
              id: '4992ecf1-26bc-47bf-a781-4e5267cd0c02',
              ref: { item: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '3b09e7aa-97f9-40b7-81e8-84e5e610d1e2',
          color: 'color1',
          anchors: [
            {
              id: '760ef8a7-b619-41bc-a61f-3d63fa1c2879',
              ref: { item: '67895813-ac6f-4dd4-9ae2-e994e9a5aa09' }
            },
            {
              id: 'd03b1bea-d63f-4960-b186-ccc582a0da1b',
              ref: { tile: { x: -11, y: 6 } }
            },
            {
              id: 'a2c1583d-667e-481c-9ddc-e1fd13a39203',
              ref: { tile: { x: -5, y: 6 } }
            },
            {
              id: 'bc60ae76-c0f1-4c7f-8ec1-acdec06a9250',
              ref: { item: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '7180a187-4254-46af-806f-4184250d9609',
          color: 'color1',
          anchors: [
            {
              id: 'cb98ae3b-f88d-45ab-9dd8-0ced127e0ee1',
              ref: { item: 'a2d5f2c4-ea64-4b3c-8c82-d50be88adb05' }
            },
            {
              id: '8a9f4c57-0685-4624-bf30-f5b27f34662a',
              ref: { item: 'bc6fdded-a090-4eae-b1fe-fe0ee0fd1c92' }
            }
          ]
        },
        {
          id: '2bbf530c-5b0a-4405-a6ef-9df4784ba49b',
          color: 'color1',
          anchors: [
            {
              id: '4072b959-8f00-4cef-9888-98b6faa5671b',
              ref: { item: 'c54ab120-44d2-46d2-9fc1-efd83ab67307' }
            },
            {
              id: '020bc704-e25f-4a3a-a613-6fb7ce800f7e',
              ref: { tile: { x: -11, y: -6 } }
            },
            {
              id: '6febf444-92b1-42ac-b6f3-afd71c3ee452',
              ref: { tile: { x: -5, y: -6 } }
            },
            {
              id: '237f901a-d01d-4d9b-8bd1-eb11efedaa1b',
              ref: { item: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '1074fc66-d2ff-49ed-85d3-87a0ded7f54b',
          color: 'color1',
          anchors: [
            {
              id: 'b2db4f0d-59e7-4715-9d28-ea43887ae8c8',
              ref: { item: '4a27ed88-abf2-448b-af07-5d2b6ebdb67f' }
            },
            {
              id: 'e742a2df-8911-40d8-9227-3d5f391f3beb',
              ref: { tile: { x: -8, y: -6 } }
            },
            {
              id: 'e1ddafc5-0f79-41af-a9f6-e8f9007accb6',
              ref: { tile: { x: -5, y: -6 } }
            },
            {
              id: '03cb17bd-34cb-4c80-989d-f299aa1a2915',
              ref: { item: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f' }
            }
          ],
          width: 10,
          description: '',
          style: 'SOLID'
        },
        {
          id: '120566e0-c0df-4d85-81b3-d6b224484668',
          color: 'color1',
          anchors: [
            {
              id: '433e4f1f-0bf9-44f5-ab9f-d98861206b59',
              ref: { item: 'a147b06a-324a-47ab-9e16-ac9101aa3d28' }
            },
            {
              id: '1affa818-d601-4ab3-b507-d71ece11920c',
              ref: { item: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f' }
            }
          ]
        },
        {
          id: '2185c84e-5277-40f1-82b9-774dd9f64e2a',
          color: 'color1',
          anchors: [
            {
              id: 'aa663458-6df7-4bb2-946b-c8cc6ab29957',
              ref: { item: 'e0462e01-8acd-461c-89a2-42c6a04d5f7f' }
            },
            {
              id: '77530d07-6183-420c-affe-91a99b685db0',
              ref: { item: 'bc6fdded-a090-4eae-b1fe-fe0ee0fd1c92' }
            }
          ]
        },
        {
          id: '2e025225-169c-4609-bf93-a4a7aa602b00',
          color: 'color1',
          anchors: [
            {
              id: '5870d75a-066c-422e-a517-c44417961809',
              ref: { item: 'bc6fdded-a090-4eae-b1fe-fe0ee0fd1c92' }
            },
            {
              id: '0fdeeb60-9820-41dc-a73b-96196e035331',
              ref: { item: 'item1' }
            }
          ]
        }
      ],
      rectangles: [
        {
          id: '75637566-6d10-49fb-b3ec-85584250475d',
          color: 'color6',
          from: { x: 1, y: -10 },
          to: { x: 6, y: -12 }
        },
        {
          id: '35cbdf0d-daa1-4939-9901-dd9aee36903f',
          color: 'color2',
          from: { x: 15, y: 4 },
          to: { x: 17, y: -4 }
        },
        {
          id: 'ae50ce7d-7b3e-49ec-8fe0-e2e09c4f2dfa',
          color: 'color7',
          from: { x: 0, y: 13 },
          to: { x: 8, y: 11 }
        },
        {
          id: 'e35ec239-f1eb-4e83-9112-d3b6b3f01f2c',
          color: 'color1',
          from: { x: -4, y: 9 },
          to: { x: -12, y: 6 }
        },
        {
          id: '27bea545-8505-4ebe-ae72-01de85833465',
          color: 'color1',
          from: { x: -4, y: -6 },
          to: { x: -12, y: -10 }
        },
        {
          id: '0a74d0a7-b987-480f-ada1-f5a575eae0b9',
          color: 'color5',
          from: { x: 3, y: 1 },
          to: { x: 5, y: -1 }
        }
      ],
      textBoxes: [
        {
          orientation: 'Y',
          fontSize: 0.6,
          content: '登机区操作',
          id: 'f19b5d77-733e-48be-93a0-a0b0cae276d4',
          tile: { x: 14, y: -1 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: '信息管理',
          id: 'a15c0d88-1682-4fc8-9678-62e029df4574',
          tile: { x: 0, y: 10 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: '终端管理',
          id: 'e8ae777d-2c29-4c8e-8f61-0c63fac32d11',
          tile: { x: -12, y: 5 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: '旅客便利',
          id: '82132c7f-704e-49f1-86e7-e4f072e56779',
          tile: { x: -12, y: -11 }
        },
        {
          orientation: 'X',
          fontSize: 0.6,
          content: 'AODB',
          id: '52070439-245d-45ab-974a-615427c1c3d1',
          tile: { x: 2, y: -2 }
        }
      ]
    }
  ]
};
