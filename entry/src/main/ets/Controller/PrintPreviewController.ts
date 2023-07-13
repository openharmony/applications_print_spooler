/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-nocheck
import print from '@ohos.print'
import { Log } from '@ohos/common';
import { PrintJob} from '@ohos/common';

const TAG = '[PrintExtensionController]:'

/**
 * PrintPreviewController
 *
 */
export class PrintPreviewController {

    /**
     * request print preview
     *
     * @param jobInfo print job Info
     * @return preview url
     */
    public async requestPrintPreview(jobInfo: PrintJob) : string {
        Log.debug(TAG, 'requestPrintPreview jobInfo:'  + JSON.stringify(jobInfo))
        let url = await print.requestPrintPreview(jobInfo)
        return url
    }

}