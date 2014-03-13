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
		 "0": ["unknown", "n/a [n/a (n/a px, n/aMbit/s); n/a (n/akHz, n/akbit/s)]"],

		 "5": ["240p", "FLV [Sorenson H.263 (400×240px, 0.25Mbit/s); MP3 (22.05kHz, 64kbit/s)]"],
		 "6": ["270p", "FLV [Sorenson H.263 (400×270px, 0.8Mbit/s); MP3 (22.05kHz, 64kbit/s)]"],
		"34": ["360p", "FLV [MPEG-4 AVC (640×360px, 0.5Mbit/s); AAC (44.1kHz, 128kbit/s)]"],
		"35": ["480p", "FLV [MPEG-4 AVC (854×480px, 0.8-1Mbit/s); AAC (44.1kHz, 128kbit/s)]"],

		"18": ["Medium", "MP4 [MPEG-4 AVC (480×360px, 0.5Mbit/s); AAC (44.1kHz, 96kbit/s)]"],

		"22": ["HD 720p", "MP4 [MPEG-4 AVC (1280×720px, 2-3Mbit/s); AAC (44.1kHz, 152kbit/s)]"],
		"37": ["HD 1080p", "MP4 [MPEG-4 AVC (1920×1080px, 3.5-5Mbit/s); AAC (44.1kHz, 152kbit/s)]"],
		"38": ["Extra HD 4K", "MP4 [MPEG-4 AVC 4096×3072px; AAC (48kHz, 152kbit/s)]"],

		"43": ["WebM 360p", "WebM [VP8 (640×360px, 0.5Mbit/s); Vorbis (44.1kHz, 128kbit/s)]"],
		"44": ["WebM 480p", "WebM [VP8 (854×480px, 1Mbit/s); Vorbis (44.1kHz, 128kbit/s)]"],
		"45": ["WebM 720p", "WebM [VP8 (1280×720px, 2Mbit/s); Vorbis (44.1kHz, 192kbit/s)]"],
		"46": ["WebM 1080p", "WebM [VP8 (1920×1080px, 4Mbit/s); Vorbis (44.1kHz, 256kbit/s)]"],

		"82": ["360p 3D", "MP4 [MPEG-4 AVC (640×360px, 0.5Mbit/s); AAC (44.1kHz, 128kbit/s)]"],
		"83": ["480p 3D", "MP4 [MPEG-4 AVC (854×480px, 0.8-1Mbit/s); AAC (44.1kHz, 128kbit/s)]"],
		"84": ["HD 720p 3D", "MP4 [MPEG-4 AVC (1280×720px, 2-3Mbit/s); AAC (44.1kHz, 152kbit/s)]"],
		"85": ["HD 1080p 3D", "MP4 [MPEG-4 AVC (1920×1080px, 3.5-5Mbit/s); AAC (44.1kHz, 152kbit/s)]"],

		"100": ["WebM 360p 3D", "WebM [VP8 (640×360px, 0.5Mbit/s); Vorbis (44.1kHz, 128kbit/s)]"],
		"101": ["WebM 480p 3D", "WebM [VP8 (854×480px, 1Mbit/s); Vorbis (44.1kHz, 128kbit/s)]"],
		"102": ["WebM 720p 3D", "WebM [VP8 (1280×720px, 2Mbit/s); Vorbis (44.1kHz, 192kbit/s)]"],
		"103": ["WebM 1080p 3D", "WebM [VP8 (1920×1080px, 4Mbit/s); Vorbis (44.1kHz, 256kbit/s)]"],

		"13": ["Mobile (shit)", "3GP [Sorenson H.263 (176×144px, n/aMbit/s); (AMR 8kHz, n/akHz)]"],
		"17": ["144p", "3GP [MPEG-4 Visual (176×144px, 0.06Mbit/s); AAC (22.05kHz, 24kbit/s)]"],
		"36": ["Mobile (high)", "3GP [MPEG-4 Visual (320×240 x, 0.25Mbit/s); AAC (22.05kHz, 64kbit/s)]"],

		"133": ["* 240p", "dash [AVC (400×240px, 0.25Mbit/s)]"],
		"134": ["* 360p", "dash [AVC (640×360px, 0.5Mbit/s)]"],
		"135": ["* 480p", "dash [AVC (854×480px, 0.8-1Mbit/s)]"],
		"136": ["* HD 720p", "dash [AVC (1280×720px, 2-3Mbit/s)]"],
		"137": ["* HD 1080p", "dash [AVC (1920×1080px, 1.5-3Mbit/s)]"],
		"160": ["* 144p", "dash [AVC (176×144px, 0.06Mbit/s)]"],

		"264": ["* HD 1080p", "dash [AVC (1920×1080px, 3.5-5Mbit/s)]"],

		"139": ["* Audio 48kbit/s", "dash [AAC (22.05kHz/44.1Hz, 48kbit/s)]"],
		"140": ["* Audio 126kbit/s", "dash [AAC (44.1kHz, 126kbit/s)]"],
		"141": ["* Audio 254kbit/s", "dash [AAC (44.1KHz, 254kbit/s)]"],
		
		"171": ["* Audio 128kbit/s", "WebM [Vorbis (44.1KHz, 128kbit/s)]"],
		"172": ["* Audio 192kbit/s", "WebM [Vorbis (44.1KHz, 192kbit/s)]"]
	}
