/*
 * Copyright 2011 2012 2013 Darko Pantić (pdarko@myopera.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var videoFormat = {
		 "0": ["unknown", "n/a [n/a (n/a px, n/aMbit/s); n/a (n/akHz, n/aKbit/s)]"],

		 "5": ["240p", "FLV [Sorenson H.263 (400×240px, 0.25Mbit/s); MP3 (22.05kHz, 64Kbit/s)]"],
		 "6": ["270p", "FLV [Sorenson H.263 (400×270px, 0.8Mbit/s); MP3 (22.05kHz, 64Kbit/s)]"],
		"34": ["360p", "FLV [MPEG-4 AVC (640×360px, 0.5Mbit/s); AAC (44.1kHz, 128Kbit/s)]"],
		"35": ["480p", "FLV [MPEG-4 AVC (854×480px, 0.8-1Mbit/s); AAC (44.1kHz, 128Kbit/s)]"],

		"18": ["Medium", "MP4 [MPEG-4 AVC (480×360px, 0.5Mbit/s); AAC (44.1kHz, 96Kbit/s)]"],

		"22": ["HD 720p", "MP4 [MPEG-4 AVC (1280×720px, 2-3Mbit/s); AAC (44.1kHz, 152Kbit/s)]"],
		"37": ["HD 1080p", "MP4 [MPEG-4 AVC (1920×1080px, 3.5-5Mbit/s); AAC (44.1kHz, 152Kbit/s)]"],
		"38": ["Extra HD 4K", "MP4 [MPEG-4 AVC 4096×3072px; AAC (48kHz, 152Kbit/s)]"],

		"43": ["WebM 360p", "WebM [VP8 (640×360px, 0.5Mbit/s); Vorbis (44.1kHz, 128Kbit/s)]"],
		"44": ["WebM 480p", "WebM [VP8 (854×480px, 1Mbit/s); Vorbis (44.1kHz, 128Kbit/s)]"],
		"45": ["WebM 720p", "WebM [VP8 (1280×720px, 2Mbit/s); Vorbis (44.1kHz, 192Kbit/s)]"],
		"46": ["WebM 1080p", "WebM [VP8 (1920×1080px, 4Mbit/s); Vorbis (44.1kHz, 256Kbit/s)]"],

		"82": ["360p 3D", "MP4 [MPEG-4 AVC (640×360px, 0.5Mbit/s); AAC (44.1kHz, 128Kbit/s)]"],
		"83": ["480p 3D", "MP4 [MPEG-4 AVC (854×480px, 0.8-1Mbit/s); AAC (44.1kHz, 128Kbit/s)]"],
		"84": ["HD 720p 3D", "MP4 [MPEG-4 AVC (1280×720px, 2-3Mbit/s); AAC (44.1kHz, 152Kbit/s)]"],
		"85": ["HD 1080p 3D", "MP4 [MPEG-4 AVC (1920×1080px, 3.5-5Mbit/s); AAC (44.1kHz, 152Kbit/s)]"],

		"100": ["WebM 360p 3D", "WebM [VP8 (640×360px, 0.5Mbit/s); Vorbis (44.1kHz, 128Kbit/s)]"],
		"101": ["WebM 480p 3D", "WebM [VP8 (854×480px, 1Mbit/s); Vorbis (44.1kHz, 128Kbit/s)]"],
		"102": ["WebM 720p 3D", "WebM [VP8 (1280×720px, 2Mbit/s); Vorbis (44.1kHz, 192Kbit/s)]"],
		"103": ["WebM 1080p 3D", "WebM [VP8 (1920×1080px, 4Mbit/s); Vorbis (44.1kHz, 256Kbit/s)]"],

		"13": ["Mobile (shit)", "3GP [Sorenson H.263 (176×144px, n/aMbit/s); (AMR 8kHz, n/akHz)]"],
		"17": ["144p", "3GP [MPEG-4 Visual (176×144px, 0.06Mbit/s); AAC (22.05kHz, 24Kbit/s)]"],
		"36": ["Mobile (high)", "3GP [MPEG-4 Visual (320×240 x, 0.25Mbit/s); AAC (22.05kHz, 64Kbit/s)]"],

		"160": ["DASH 144p", "dash [AVC (176×144px, 0.06Mbit/s)]"],
		"133": ["DASH 240p", "dash [AVC (400×240px, 0.25Mbit/s)]"],
		"134": ["DASH 360p", "dash [AVC (640×360px, 0.5Mbit/s)]"],
		"135": ["DASH 480p", "dash [AVC (854×480px, 0.8-1Mbit/s)]"],
		"298": ["DASH HD 720p", "dash [AVC (1280x720px, 0.5Mbit/s)]"],
		"136": ["DASH HD 720p", "dash [AVC (1280×720px, 2-3Mbit/s)]"],
		"137": ["DASH HD 1080p", "dash [AVC (1920×1080px, 1.5-3Mbit/s)]"],
		"264": ["DASH HD 1080p", "dash [AVC (1920×1080px, 3.5-5Mbit/s)]"],

		"278": ["DASH WebM 144p", "dash WebM 2 [VP9 (256x144px, 0.03Mbit/s)]"],
		"242": ["DASH WebM 240p", "dash WebM 2 [VP9 (400x240px, 0.25Mbit/s)]"],
		"243": ["DASH WebM 360p", "dash WebM 2 [VP9 (640x360px, 0.5Mbit/s)]"],
		"244": ["DASH WebM 480p", "dash WebM 2 [VP9 (854x480px, 1Mbit/s)]"],
		"247": ["DASH WebM 720p", "dash WebM 2 [VP9 (1280x720px, 2Mbit/s)]"],
		"248": ["DASH WebM 1080p", "dash WebM 2 [VP9 (1920x1080px, 4Mbit/s)]"],
		"302": ["DASH WebM 720p", "dash WebM 2 [VP9 (1280x720px, 0.3Mbit/s)]"],

		"139": ["Audio 48Kbit/s", "dash M4A [AAC (22.05kHz/44.1Hz, 48Kbit/s)]"],
		"140": ["Audio 126Kbit/s", "dash M4A [AAC (44.1kHz, 126Kbit/s)]"],
		"141": ["Audio 255Kbit/s", "dash M4A [AAC (44.1KHz, 255Kbit/s)]"],
		
		"171": ["Audio 128Kbit/s", "dash WebM 2 [Vorbis (44.1KHz, 128Kbit/s)]"],
		"172": ["Audio 205Kbit/s", "dash WebM 2 [Vorbis (44.1KHz, 205Kbit/s)]"],
		"249": ["Audio 50Kbit/s", "dash WebM 4/2 [Opus (48.0KHz, 50Kbit/s)]"],
		"250": ["Audio 66Kbit/s", "dash WebM 4/2 [Opus (48.0KHz, 66Kbit/s)]"],
		"251": ["Audio 131Kbit/s", "dash WebM 4/2 [Opus (48.0KHz, 131Kbit/s)]"]
	}
