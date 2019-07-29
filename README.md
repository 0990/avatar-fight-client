# 头像大乱战
cocos creator开发的对战小游戏客户端protobuf版<br>
点此试玩：http://avatarfight.0990game.tk<br>

# 改善
1，原项目使用json通信，网络流量较高，protobuf会节省不少流量<br>
2，界面做了部分简洁处理<br>

# 操作
![login](doc/login.png)<br>
![game](doc/game.png)<br>
使用上下左右控制键转向（或摇杆），鼠标点击发射子弹，消灭其它人,其它人可随时加入游戏

# 编译运行
服务端改由golang，在此：https://github.com/0990/avatar-fight-server

客户端使用cocos creator2.1.2打开项目，运行即可

# 说明
由于使用的google cloud云做试玩，可能会出现延迟比较高的情况
