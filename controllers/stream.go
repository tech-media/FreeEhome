package controllers

import "github.com/tsingeye/FreeEhome/models"

/**
 * @apiDefine stream 实时直播接口
 */

type StreamController struct {
	AuthCheckController
}

/**
 * @api {get} /api/v1/channels/:id/stream 开始实时直播
 * @apiVersion 1.0.0
 * @apiGroup stream
 * @apiName StartStream
 * @apiDescription 注释：:id参数是channelID
 * @apiParam {String} token 授权码
 * @apiSuccessExample  {json} Response-Example
 * {
 *   "errCode": 200,
 *   "errMsg": "Success OK",
 *   "sessionURL": {
 *     "rtmp": "rtmp://ip:port/rtp/xxx",
 *     "flv": "http://ip:port/rtp/xxx.flv",
 *     "rtsp": "rtsp://ip:port/rtp/xxx",
 *     "hls": "http://ip:port/rtp/xxx/hls.m3u8",
 *   }
 * }
 */

func (s *StreamController) StartStream() {
	token := s.GetString("token")
	//通道编号
	channelID := s.Ctx.Input.Param(":id")

	s.Data["json"] = models.StartStream(token, channelID)
	s.ServeJSON()
}
