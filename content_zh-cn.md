<h1> 简历 <a class="btn" href="#" style="text-align:right" onclick="  // 改变当前语言。en=>cn, cn=>en
  var markdownPath = 'content.md';
  var language = localStorage.getItem('locale') || window.navigator.language.toLowerCase() || 'en';
  if (language.indexOf('zh-') !== -1) {
      markdownPath = '../content.md';
      localStorage.setItem('locale', 'en');
  }else{
    markdownPath = '../content_zh-cn.md'
    localStorage.setItem('locale', 'zh-cn');
  }
  getMarkdown(markdownPath);">
  <i class="fa fa-language" title="change language" aria-hidden="true"></i></a>
</h1> 

## 教育


|**时间** |**专业** |**学校**|**学位** |
| - | - |- | - |
|08/2020 - 08/2022|Software Engineering of Distributed System|KTH 瑞典皇家理工学院|Master of Science|
|03/2019 - 07/2020|Information Technology| 吕贝克应用技术大学, 中德合作项目|Bachelor of Science|
|09/2016 - 02/2019|电气工程及其自动化, 中德合作项目|华东理工大学, 中德合作项目|工学学士|
|09/2013 - 06/2016||复旦大学附属中学||

## 工作经历

> 08/2022 至今

- Machine Learning Engineer at [Intel](https://www.intel.com/content/www/us/en/jobs/locations/china.html)
## 实习

> 02/2022 至今

- [RISE (Research Institute of Sweden) cda group](https://cda-group.github.io/) 硕士论文
  - 构建一个基于Apache Flink Stateful Functions的时序图数据库
  - 实现基于消息传递的流式图算法
  - 实现时序图的存储与查询

> 08/2021 - 10/2021

- [EMQX](https://github.com/emqx/emqx) 开源实习
  - 解决 issues
  - 增加 CI 脚本和集群部署脚本
  - 完善官方文档

> 05/2021 - 08/2021

- [Ericsson](https://www.ericsson.com/en) 暑期实习
  - Radio Control System 中间件
  - property based testing

> 03/2020 - 06/2020

- [VITEC GmbH](https://www.vitec.com/ez-tv-platform-iptv-digital-signage)（德国，基尔）学士学位论文  
  - 使用tensorflow, Keras, GPU开发基于视频的火灾和烟雾探测解决方案
  - 设计可扩展并适应用户数据集的CNN模型 
  - 使用分割算法和合并算法进行对象定位

## 技能

**编程**

- 掌握 Java, Python, 熟悉Scala, Erlang, HTML/JS/CSS
- 熟悉全栈开发, Web框架, 数据库（MySQL，MongoDB, PostgreSQL, Neo4j）
- 熟悉分布式算法, 分布式计算常用工具（Spark, Kafka, Flink, Hadoop)
- 熟悉深度学习（Keras, tensorflow, Dlib, 
OpenCV, GNN）和一些传统机器学习算法


**实用工具**

- 重度使用Git, Github，在GitHub上对大型开源项目有多个PR和issue解决
- Docker, Minikube

**语言** 

- 中文 (母语)
- 英文 (熟练) 
- 德语 (日常交流)


## 项目经历 (https://github.com/Spycsh/)

- hesse - 基于Flink Stateful Functions的时序图数据库, 硕士论文项目
- RunSpec - 基于kafka，spark，mongodb的安卓跑步app
- distributedKVStore - 一个基于Paxos的KV Store
- 电影推荐系统 - 基于Scala，Spark，MongoDB，Redis的推荐系统后端
- Face GUI - 人脸识别，情感跟踪和人脸搜索的GUI实现
- 一个GitHub Action, 用于自动检测pull request中增加内容中含有的链接有效性
<!-- - 分子预测项目 - 预测分子活性的数据科学课程项目 (https://github.com/Spycsh/DataScienceNoteBooks/tree/main/projects/modular-activity-prediction-project)
- 数字食谱 - 基于MySQL，javafx，MVC模式的简单数字食谱 (https://github.com/Spycsh/DigitalCookbook)
- 景观收集器 - 基于PHP，XAMPP，MySQL的简单景观收集器 (https://github.com/Spycsh/landscapeCollector)
- SEP系统 - 基于SpringBoot，H2数据库的简单ERP系统 (https://github.com/Spycsh/KTH-ID2207-Project)
- BombMan - 一个基于phaser.js的html5游戏 (https://github.com/Spycsh/BombMan) -->


## 志愿者经历
> 03/2020-06/2020

- Digital Signal Processing 课程助教

> 09/2016-07/2020

- 学习委员，负责分发课程材料，学院老师同学之间的交流沟通，在网站上收集分享出国申请信息

> 09/2017
- 华东理工大学新生报道志愿者

## 个人兴趣

- 体育 - 高中400m和800m跑步比赛中获得4枚金牌
- 音乐 - 上海市音乐学院十级业余小提琴演奏家证书

